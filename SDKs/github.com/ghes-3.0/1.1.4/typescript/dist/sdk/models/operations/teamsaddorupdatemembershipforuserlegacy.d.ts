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
export declare enum TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}
export declare class TeamsAddOrUpdateMembershipForUserLegacyRequestBody extends SpeakeasyBase {
    /**
     * The role that this user should have in the team. Can be one of:
     *
     * @remarks
     * \* `member` - a normal member of the team.
     * \* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.
     */
    role?: TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum;
}
export declare class TeamsAddOrUpdateMembershipForUserLegacyRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateMembershipForUserLegacyRequestBody;
    teamId: number;
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
