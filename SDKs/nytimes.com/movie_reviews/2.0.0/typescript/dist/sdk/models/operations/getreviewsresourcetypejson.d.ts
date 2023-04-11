import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Sets the sort order of the results.
 *
 * @remarks
 *
 * Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.
 *
 * If you do not specify a sort order, the results will be ordered by publication-date.
 *
 */
export declare enum GetReviewsResourceTypeJsonOrderEnum {
    ByTitle = "by-title",
    ByPublicationDate = "by-publication-date",
    ByOpeningDate = "by-opening-date"
}
/**
 * Specify all to retrieve all reviews, including NYT Critics' Picks.
 *
 * @remarks
 *
 * Specify picks to get NYT Critics' Picks currently in theaters.
 *
 *
 */
export declare enum GetReviewsResourceTypeJsonResourceTypeEnum {
    All = "all",
    Picks = "picks"
}
export declare class GetReviewsResourceTypeJsonRequest extends SpeakeasyBase {
    /**
     * Positive integer, multiple of 20
     */
    offset?: number;
    /**
     * Sets the sort order of the results.
     *
     * @remarks
     *
     * Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.
     *
     * If you do not specify a sort order, the results will be ordered by publication-date.
     *
     */
    order?: GetReviewsResourceTypeJsonOrderEnum;
    /**
     * Specify all to retrieve all reviews, including NYT Critics' Picks.
     *
     * @remarks
     *
     * Specify picks to get NYT Critics' Picks currently in theaters.
     *
     *
     */
    resourceType: GetReviewsResourceTypeJsonResourceTypeEnum;
}
/**
 * An array of Movies
 */
export declare class GetReviewsResourceTypeJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Movie[];
    status?: string;
}
export declare class GetReviewsResourceTypeJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of Movies
     */
    getReviewsResourceTypeJSON200ApplicationJSONObject?: GetReviewsResourceTypeJson200ApplicationJSON;
}
