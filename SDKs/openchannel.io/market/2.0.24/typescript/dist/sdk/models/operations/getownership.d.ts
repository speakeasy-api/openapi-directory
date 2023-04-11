import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOwnershipRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return per page
     */
    limit?: number;
    /**
     * The result set page number to be returned
     */
    pageNumber?: number;
    /**
     * A query document. Example: {'userId':'12'} matches all the ownership records that have the userId '12'.
     */
    query?: string;
    /**
     * A sort document. Example: {'date':1} sorts the results by date in ascending order
     */
    sort?: string;
}
export declare class GetOwnershipResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
