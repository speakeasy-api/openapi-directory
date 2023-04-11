import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSyncMapServerList: readonly ["https://sync.twilio.com"];
export declare class CreateSyncMapSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSyncMapCreateSyncMapRequest extends SpeakeasyBase {
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Map expires (time-to-live) and is deleted.
     */
    collectionTtl?: number;
    /**
     * An alias for `collection_ttl`. If both parameters are provided, this value is ignored.
     */
    ttl?: number;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
}
export declare class CreateSyncMapRequest extends SpeakeasyBase {
    requestBody?: CreateSyncMapCreateSyncMapRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the Sync Map in.
     */
    serviceSid: string;
}
export declare class CreateSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    syncV1ServiceSyncMap?: shared.SyncV1ServiceSyncMap;
}
