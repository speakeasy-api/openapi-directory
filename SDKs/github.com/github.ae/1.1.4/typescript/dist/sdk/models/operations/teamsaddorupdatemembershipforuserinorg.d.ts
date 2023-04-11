import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The role that this user should have in the team.
 */
export declare enum TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}
export declare class TeamsAddOrUpdateMembershipForUserInOrgRequestBody extends SpeakeasyBase {
    /**
     * The role that this user should have in the team.
     */
    role?: TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum;
}
export declare class TeamsAddOrUpdateMembershipForUserInOrgRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateMembershipForUserInOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    teamSlug: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class TeamsAddOrUpdateMembershipForUserInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamMembership?: shared.TeamMembership;
}
