import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostScrobbleShowsRequestBody extends SpeakeasyBase {
    /**
     * The episode airdate
     */
    airdate?: Date;
    /**
     * The episode number
     */
    episode?: number;
    /**
     * Epoch timestamp for when the user watched the episode, or 0 for unknown.
     */
    markedAt?: number;
    /**
     * The season number
     */
    season?: number;
    /**
     * 0 for watched, 1 for acquired, 2 for skipped
     */
    type?: any;
}
export declare class PostScrobbleShowsRequest extends SpeakeasyBase {
    requestBody?: PostScrobbleShowsRequestBody[];
    /**
     * The show's IMDB ID
     */
    imdbId?: number;
    /**
     * The show's TheTVDB ID
     */
    thetvdbId?: number;
    /**
     * The show's TVmaze ID
     */
    tvmazeId?: number;
}
export declare class PostScrobbleShowsResponse extends SpeakeasyBase {
    /**
     * All episodes were succesfully marked
     */
    bulkResponse?: shared.BulkResponse[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
