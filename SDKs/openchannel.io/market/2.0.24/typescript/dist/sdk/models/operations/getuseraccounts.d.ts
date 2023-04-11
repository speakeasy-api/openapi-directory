import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserAccountsRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return per page
     */
    limit?: number;
    /**
     * The result set page number to be returned
     */
    pageNumber?: number;
    /**
     * A query document. Example: {'name':'NASA'} matches all the userAccounts that have the name 'NASA'
     */
    query?: string;
    /**
     * A sort document. Example: {'name':1} sorts the results by name in ascending order
     */
    sort?: string;
}
export declare class GetUserAccountsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
