import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAppsVersionsRequest extends SpeakeasyBase {
    /**
     * The unique id of the developer requesting this resource
     */
    developerId?: string;
    /**
     * The maximum number of results to return per page
     */
    limit?: number;
    /**
     * The result set page number to be returned
     */
    pageNumber?: number;
    /**
     * A query document. Example: {'name':'MyApp'} matches all the apps that have the name 'MyApp'
     */
    query?: string;
    /**
     * A sort document. Example: {'name':1} sorts the results by name in ascending order
     */
    sort?: string;
}
export declare class GetAppsVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
