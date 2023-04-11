import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAppsRequest extends SpeakeasyBase {
    /**
     * Whether this result should only contain apps that are owned by this user
     */
    isOwner?: boolean;
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
    /**
     * The unique id of the user requesting this resource
     */
    userId?: string;
}
export declare class GetAppsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
