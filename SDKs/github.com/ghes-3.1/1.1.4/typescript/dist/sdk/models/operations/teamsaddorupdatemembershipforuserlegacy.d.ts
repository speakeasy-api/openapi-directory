import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The role that this user should have in the team.
 */
export declare enum TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}
export declare class TeamsAddOrUpdateMembershipForUserLegacyRequestBody extends SpeakeasyBase {
    /**
     * The role that this user should have in the team.
     */
    role?: TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum;
}
export declare class TeamsAddOrUpdateMembershipForUserLegacyRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateMembershipForUserLegacyRequestBody;
    /**
     * The unique identifier of the team.
     */
    teamId: number;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class TeamsAddOrUpdateMembershipForUserLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    teamMembership?: shared.TeamMembership;
}
