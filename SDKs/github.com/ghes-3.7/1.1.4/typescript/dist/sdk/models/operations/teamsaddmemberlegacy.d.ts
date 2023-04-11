import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsAddMemberLegacyRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the team.
     */
    teamId: number;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class TeamsAddMemberLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
