import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2EpisodesIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2EpisodesIdRequest extends SpeakeasyBase {
    /**
     * The ID of the episode to operate on.
     */
    id: number;
}
export declare class GetApiV2EpisodesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The matching episode.
     */
    episode?: shared.Episode;
    /**
     * Authorization failed, or the user is not permitted to view this episode.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
