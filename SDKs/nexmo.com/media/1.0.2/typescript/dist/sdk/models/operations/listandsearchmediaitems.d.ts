import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The order of search results.
 */
export declare enum ListAndSearchMediaItemsOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare class ListAndSearchMediaItemsRequest extends SpeakeasyBase {
    /**
     * Retrieve results created on or before this timestamp.
     */
    endTime?: string;
    /**
     * The order of search results.
     */
    order?: ListAndSearchMediaItemsOrderEnum;
    /**
     * Which page to retrieve in pagination
     */
    pageIndex?: number;
    /**
     * How many items at most per page
     */
    pageSize?: number;
    /**
     * Retrieve results created on or after this timestap.
     */
    startTime?: string;
}
/**
 * A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields
 */
export declare class ListAndSearchMediaItems200ApplicationJSONEmbedded extends SpeakeasyBase {
    media?: shared.Media[];
}
export declare class ListAndSearchMediaItems200ApplicationJSONLinksFirst extends SpeakeasyBase {
    href?: string;
}
export declare class ListAndSearchMediaItems200ApplicationJSONLinksLast extends SpeakeasyBase {
    href?: string;
}
export declare class ListAndSearchMediaItems200ApplicationJSONLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class ListAndSearchMediaItems200ApplicationJSONLinks extends SpeakeasyBase {
    first?: ListAndSearchMediaItems200ApplicationJSONLinksFirst;
    last?: ListAndSearchMediaItems200ApplicationJSONLinksLast;
    self?: ListAndSearchMediaItems200ApplicationJSONLinksSelf;
}
/**
 * Successfully retrieved
 */
export declare class ListAndSearchMediaItems200ApplicationJSON extends SpeakeasyBase {
    /**
     * A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields
     */
    embedded?: ListAndSearchMediaItems200ApplicationJSONEmbedded;
    links?: ListAndSearchMediaItems200ApplicationJSONLinks;
    /**
     * The total number of records returned by your request.
     */
    count?: number;
    /**
     * The `page_index` used in your request.
     */
    pageIndex?: number;
    /**
     * The amount of records returned in this response.
     */
    pageSize?: number;
}
export declare class ListAndSearchMediaItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved
     */
    listAndSearchMediaItems200ApplicationJSONObject?: ListAndSearchMediaItems200ApplicationJSON;
}
