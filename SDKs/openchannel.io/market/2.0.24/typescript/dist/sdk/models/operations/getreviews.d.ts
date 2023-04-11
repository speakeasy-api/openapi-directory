import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetReviewsRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return per page
     */
    limit?: number;
    /**
     * The result set page number to be returned
     */
    pageNumber?: number;
    /**
     * A query document. Example: {'rating': 500} matches all the reviews that have a rating of 500.
     */
    query?: string;
    /**
     * A sort document. Example: {'rating':1} sorts the results by rating in ascending order
     */
    sort?: string;
}
export declare class GetReviewsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
