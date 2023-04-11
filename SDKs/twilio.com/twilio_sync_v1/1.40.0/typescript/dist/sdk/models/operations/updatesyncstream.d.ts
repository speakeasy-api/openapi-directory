import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncStreamServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncStreamSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncStreamUpdateSyncStreamRequest extends SpeakeasyBase {
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Stream expires and is deleted (time-to-live).
     */
    ttl?: number;
}
export declare class UpdateSyncStreamRequest extends SpeakeasyBase {
    requestBody?: UpdateSyncStreamUpdateSyncStreamRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Stream resource to update.
     */
    serviceSid: string;
    /**
     * The SID of the Stream resource to update.
     */
    sid: string;
}
export declare class UpdateSyncStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncStream?: shared.SyncV1ServiceSyncStream;
}
