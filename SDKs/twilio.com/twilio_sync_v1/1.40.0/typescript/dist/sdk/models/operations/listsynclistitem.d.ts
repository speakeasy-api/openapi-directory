import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncListItemServerList: readonly ["https://sync.twilio.com"];
export declare class ListSyncListItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncListItemRequest extends SpeakeasyBase {
    /**
     * Whether to include the List Item referenced by the `from` parameter. Can be: `inclusive` to include the List Item referenced by the `from` parameter or `exclusive` to start with the next List Item. The default value is `inclusive`.
     */
    bounds?: shared.SyncListItemEnumQueryFromBoundTypeEnum;
    /**
     * The `index` of the first Sync List Item resource to read. See also `bounds`.
     */
    from?: string;
    /**
     * The SID of the Sync List with the List Items to read. Can be the Sync List resource's `sid` or its `unique_name`.
     */
    listSid: string;
    /**
     * How to order the List Items returned by their `index` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending.
     */
    order?: shared.SyncListItemEnumQueryResultOrderEnum;
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
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the List Item resources to read.
     */
    serviceSid: string;
}
export declare class ListSyncListItemListSyncListItemResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncListItemListSyncListItemResponse extends SpeakeasyBase {
    items?: shared.SyncV1ServiceSyncListSyncListItem[];
    meta?: ListSyncListItemListSyncListItemResponseMeta;
}
export declare class ListSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncListItemResponse?: ListSyncListItemListSyncListItemResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
