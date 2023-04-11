import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncListServerList: readonly ["https://sync.twilio.com"];
export declare class FetchSyncListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncListRequest extends SpeakeasyBase {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List resource to fetch. Can be the Sync List resource's `sid` or its `unique_name`.
     */
    sid: string;
}
export declare class FetchSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncList?: shared.SyncV1ServiceSyncList;
}
