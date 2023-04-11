import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAppsTextSearchRequest extends SpeakeasyBase {
    /**
     * A JSON array containing all the fields to be searched through. Example: ['name', 'customData.description']
     */
    fields: string;
    /**
     * Whether this result should only contain apps that are owned by this user
     */
    isOwned?: boolean;
    /**
     * The maximum number of results to return per page
     */
    limit?: number;
    /**
     * The result set page number to be returned
     */
    pageNumber?: number;
    /**
     * A query document. Example: {'name':'MyApp'} matches all the documents that have the name 'MyApp'
     */
    query?: string;
    /**
     * The text to search for.
     */
    text: string;
    /**
     * The unique id of the user requesting this resource
     */
    userId?: string;
}
export declare class GetAppsTextSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
