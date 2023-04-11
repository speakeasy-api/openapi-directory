import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUsersRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return per page
     */
    limit?: number;
    /**
     * The result set page number to be returned
     */
    pageNumber?: number;
    /**
     * A query document. Example: {'name':'John'} matches all the users that have the name 'John'
     */
    query?: string;
    /**
     * A sort document. Example: {'name':1} sorts the results by name in ascending order
     */
    sort?: string;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
