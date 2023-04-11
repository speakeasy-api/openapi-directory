import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncSyncListItemServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncSyncListItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncSyncListItemRequest extends SpeakeasyBase {
    bounds?: shared.SyncListItemEnumQueryFromBoundTypeEnum;
    from?: string;
    listSid: string;
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
    serviceSid: string;
}
export declare class ListSyncSyncListItemListSyncSyncListItemResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncSyncListItemListSyncSyncListItemResponse extends SpeakeasyBase {
    items?: shared.PreviewSyncServiceSyncListSyncListItem[];
    meta?: ListSyncSyncListItemListSyncSyncListItemResponseMeta;
}
export declare class ListSyncSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncSyncListItemResponse?: ListSyncSyncListItemListSyncSyncListItemResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
