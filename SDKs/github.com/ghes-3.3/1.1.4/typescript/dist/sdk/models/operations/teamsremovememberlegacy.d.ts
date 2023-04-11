import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveMemberLegacyRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the team.
     */
    teamId: number;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class TeamsRemoveMemberLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
