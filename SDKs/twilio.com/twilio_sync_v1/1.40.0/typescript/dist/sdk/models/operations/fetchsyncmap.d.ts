import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncMapServerList: readonly ["https://sync.twilio.com"];
export declare class FetchSyncMapSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncMapRequest extends SpeakeasyBase {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map resource to fetch. Can be the Sync Map's `sid` or its `unique_name`.
     */
    sid: string;
}
export declare class FetchSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncMap?: shared.SyncV1ServiceSyncMap;
}
