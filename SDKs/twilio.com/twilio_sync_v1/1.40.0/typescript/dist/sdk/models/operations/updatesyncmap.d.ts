import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncMapServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncMapSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncMapUpdateSyncMapRequest extends SpeakeasyBase {
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Map expires (time-to-live) and is deleted.
     */
    collectionTtl?: number;
    /**
     * An alias for `collection_ttl`. If both parameters are provided, this value is ignored.
     */
    ttl?: number;
}
export declare class UpdateSyncMapRequest extends SpeakeasyBase {
    requestBody?: UpdateSyncMapUpdateSyncMapRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map resource to update.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map resource to update. Can be the Sync Map's `sid` or its `unique_name`.
     */
    sid: string;
}
export declare class UpdateSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncMap?: shared.SyncV1ServiceSyncMap;
}
