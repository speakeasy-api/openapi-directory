import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The role that this user should have in the team. Can be one of:
 *
 * @remarks
 * \* `member` - a normal member of the team.
 * \* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.
 */
export declare enum TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}
export declare class TeamsAddOrUpdateMembershipForUserInOrgRequestBody extends SpeakeasyBase {
    /**
     * The role that this user should have in the team. Can be one of:
     *
     * @remarks
     * \* `member` - a normal member of the team.
     * \* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.
     */
    role?: TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum;
}
export declare class TeamsAddOrUpdateMembershipForUserInOrgRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateMembershipForUserInOrgRequestBody;
    org: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
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
