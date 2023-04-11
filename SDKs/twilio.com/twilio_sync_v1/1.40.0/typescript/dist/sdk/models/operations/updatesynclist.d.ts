import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncListServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncListUpdateSyncListRequest extends SpeakeasyBase {
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync List expires (time-to-live) and is deleted.
     */
    collectionTtl?: number;
    /**
     * An alias for `collection_ttl`. If both are provided, this value is ignored.
     */
    ttl?: number;
}
export declare class UpdateSyncListRequest extends SpeakeasyBase {
    requestBody?: UpdateSyncListUpdateSyncListRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List resource to update.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List resource to update. Can be the Sync List resource's `sid` or its `unique_name`.
     */
    sid: string;
}
export declare class UpdateSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncList?: shared.SyncV1ServiceSyncList;
}
