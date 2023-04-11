import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncMapItemServerList: readonly ["https://sync.twilio.com"];
export declare class FetchSyncMapItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncMapItemRequest extends SpeakeasyBase {
    /**
     * The `key` value of the Sync Map Item resource to fetch.
     */
    key: string;
    /**
     * The SID of the Sync Map with the Sync Map Item resource to fetch. Can be the Sync Map resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Item resource to fetch.
     */
    serviceSid: string;
}
export declare class FetchSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncMapSyncMapItem?: shared.SyncV1ServiceSyncMapSyncMapItem;
}
