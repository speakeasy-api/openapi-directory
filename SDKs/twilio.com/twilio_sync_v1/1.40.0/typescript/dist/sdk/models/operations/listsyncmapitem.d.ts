import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncMapItemServerList: readonly ["https://sync.twilio.com"];
export declare class ListSyncMapItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncMapItemRequest extends SpeakeasyBase {
    /**
     * Whether to include the Map Item referenced by the `from` parameter. Can be: `inclusive` to include the Map Item referenced by the `from` parameter or `exclusive` to start with the next Map Item. The default value is `inclusive`.
     */
    bounds?: shared.SyncMapItemEnumQueryFromBoundTypeEnum;
    /**
     * The `key` of the first Sync Map Item resource to read. See also `bounds`.
     */
    from?: string;
    /**
     * The SID of the Sync Map with the Sync Map Item resource to fetch. Can be the Sync Map resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /**
     * How to order the Map Items returned by their `key` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending. Map Items are [ordered lexicographically](https://en.wikipedia.org/wiki/Lexicographical_order) by Item key.
     */
    order?: shared.SyncMapItemEnumQueryResultOrderEnum;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Map Item resources to read.
     */
    serviceSid: string;
}
export declare class ListSyncMapItemListSyncMapItemResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListSyncMapItemListSyncMapItemResponse extends SpeakeasyBase {
    items?: shared.SyncV1ServiceSyncMapSyncMapItem[];
    meta?: ListSyncMapItemListSyncMapItemResponseMeta;
}
export declare class ListSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncMapItemResponse?: ListSyncMapItemListSyncMapItemResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
