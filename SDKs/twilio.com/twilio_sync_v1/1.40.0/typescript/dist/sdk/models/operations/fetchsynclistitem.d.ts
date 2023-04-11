import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncListItemServerList: readonly ["https://sync.twilio.com"];
export declare class FetchSyncListItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncListItemRequest extends SpeakeasyBase {
    /**
     * The index of the Sync List Item resource to fetch.
     */
    index: number;
    /**
     * The SID of the Sync List with the Sync List Item resource to fetch. Can be the Sync List resource's `sid` or its `unique_name`.
     */
    listSid: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List Item resource to fetch.
     */
    serviceSid: string;
}
export declare class FetchSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncListSyncListItem?: shared.SyncV1ServiceSyncListSyncListItem;
}
