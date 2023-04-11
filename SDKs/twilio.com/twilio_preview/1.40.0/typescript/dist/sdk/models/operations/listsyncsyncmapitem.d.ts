import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncSyncMapItemServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncSyncMapItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncSyncMapItemRequest extends SpeakeasyBase {
    bounds?: shared.SyncMapItemEnumQueryFromBoundTypeEnum;
    from?: string;
    mapSid: string;
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
    serviceSid: string;
}
export declare class ListSyncSyncMapItemListSyncSyncMapItemResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncSyncMapItemListSyncSyncMapItemResponse extends SpeakeasyBase {
    items?: shared.PreviewSyncServiceSyncMapSyncMapItem[];
    meta?: ListSyncSyncMapItemListSyncSyncMapItemResponseMeta;
}
export declare class ListSyncSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncSyncMapItemResponse?: ListSyncSyncMapItemListSyncSyncMapItemResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
