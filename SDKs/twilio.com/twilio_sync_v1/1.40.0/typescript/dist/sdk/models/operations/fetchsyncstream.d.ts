import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncStreamServerList: readonly ["https://sync.twilio.com"];
export declare class FetchSyncStreamSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncStreamRequest extends SpeakeasyBase {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Stream resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the Stream resource to fetch.
     */
    sid: string;
}
export declare class FetchSyncStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncStream?: shared.SyncV1ServiceSyncStream;
}
