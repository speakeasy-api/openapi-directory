import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSyncListServerList: readonly ["https://sync.twilio.com"];
export declare class CreateSyncListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSyncListCreateSyncListRequest extends SpeakeasyBase {
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync List expires (time-to-live) and is deleted.
     */
    collectionTtl?: number;
    /**
     * Alias for collection_ttl. If both are provided, this value is ignored.
     */
    ttl?: number;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be unique within its Service and it can be up to 320 characters long. The `unique_name` value can be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
}
export declare class CreateSyncListRequest extends SpeakeasyBase {
    requestBody?: CreateSyncListCreateSyncListRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the new Sync List in.
     */
    serviceSid: string;
}
export declare class CreateSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    syncV1ServiceSyncList?: shared.SyncV1ServiceSyncList;
}
