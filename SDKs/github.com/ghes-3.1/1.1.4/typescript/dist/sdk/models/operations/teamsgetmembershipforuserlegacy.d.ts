import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsGetMembershipForUserLegacyRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the team.
     */
    teamId: number;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class TeamsGetMembershipForUserLegacyResponse extends SpeakeasyBase {
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
