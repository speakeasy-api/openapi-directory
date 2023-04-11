import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Set this parameter to Y to limit the results to NYT Critics' Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick=N. (To get all reviews regardless of critics-pick status, simply omit this parameter.)
 *
 * @remarks
 *
 */
export declare enum GetReviewsSearchJsonCriticsPickEnum {
    Y = "Y",
    N = "N"
}
export declare class GetReviewsSearchJsonRequest extends SpeakeasyBase {
    /**
     * Set this parameter to Y to limit the results to NYT Critics' Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick=N. (To get all reviews regardless of critics-pick status, simply omit this parameter.)
     *
     * @remarks
     *
     */
    criticsPick?: GetReviewsSearchJsonCriticsPickEnum;
    /**
     * Positive integer, multiple of 20
     */
    offset?: number;
    /**
     * Single date: YYYY-MM-DD
     *
     * @remarks
     *
     * Start and end date: YYYY-MM-DD;YYYY-MM-DD
     *
     * The opening-date is the date the movie's opening date in the New York region.
     *
     */
    openingDate?: string;
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
    order?: string;
    /**
     * Single date: YYYY-MM-DD
     *
     * @remarks
     *
     * Start and end date: YYYY-MM-DD;YYYY-MM-DD
     *
     * The publication-date is the date the review was first published in The Times.
     *
     */
    publicationDate?: string;
    /**
     * Search keywords; matches movie title and indexed terms
     *
     * @remarks
     *
     * To limit your search to exact matches only, surround your search string with single quotation marks (e.g., query='28+days+later'). Otherwise, responses will include partial matches ("head words") as well as exact matches (e.g., president will match president, presidents and presidential).
     *
     *   If you specify multiple terms without quotation marks, they will be combined in an OR search.
     *
     *   If you omit the query parameter, your request will be equivalent to a reviews and NYT Critics' Picks request.
     *
     */
    query?: string;
    /**
     * Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis.
     *
     * @remarks
     *
     */
    reviewer?: string;
}
/**
 * An array of Movies
 */
export declare class GetReviewsSearchJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Movie[];
    status?: string;
}
export declare class GetReviewsSearchJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of Movies
     */
    getReviewsSearchJSON200ApplicationJSONObject?: GetReviewsSearchJson200ApplicationJSON;
}
