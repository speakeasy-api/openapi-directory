import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2EpisodesSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
/**
 * The sort order of the list of episodes, based on episode ID. If unspecified, the episodes are returned in random order. If using paging to iterate through the results, sort order should be specified.
 */
export declare enum GetApiV2EpisodesOrderByIDEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetApiV2EpisodesRequest extends SpeakeasyBase {
    /**
     * Matches on the begin air date of the episode (inclusive).
     */
    beginAirDateAfter?: Date;
    /**
     * Matches on the end air date of the episode (inclusive).
     */
    endAirDateBefore?: Date;
    /**
     * Matches on the ID of the episode.
     */
    id?: number;
    /**
     * The sort order of the list of episodes, based on episode ID. If unspecified, the episodes are returned in random order. If using paging to iterate through the results, sort order should be specified.
     */
    orderById?: GetApiV2EpisodesOrderByIDEnum;
    /**
     * The number of items to return. Must be between 0 and 500, inclusive.
     */
    pageSize?: number;
    /**
     * The start page of the results to return. The first item is indexed at 0.
     */
    pageStart?: number;
    /**
     * Matches on the ID of the program that owns the episode.
     */
    programId: number;
}
export declare class GetApiV2EpisodesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The matching episode.
     */
    episodes?: shared.Episode[];
    /**
     * The request is missing required data or invalid.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
