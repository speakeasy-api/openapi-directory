import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTransactionsRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return per page
     */
    limit?: number;
    /**
     * The result set page number to be returned
     */
    pageNumber?: number;
    /**
     * A query document. Example: {'userId':'1'} matches all the transactions that have the userId '1'.
     */
    query?: string;
    /**
     * A sort document. Example: {'date':1} sorts the results by total in ascending order
     */
    sort?: string;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
