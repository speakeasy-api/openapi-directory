import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostScrobbleEpisodesRequestBody extends SpeakeasyBase {
    /**
     * The TVmaze episode ID
     */
    episodeId?: number;
    /**
     * Epoch timestamp for when the user watched the episode, or 0 for unknown.
     */
    markedAt?: number;
    /**
     * 0 for watched, 1 for acquired, 2 for skipped
     */
    type?: any;
}
export declare class PostScrobbleEpisodesResponse extends SpeakeasyBase {
    /**
     * All episodes were succesfully marked
     */
    bulkResponse?: shared.BulkResponse[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
