import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSyncMapItemServerList: readonly ["https://sync.twilio.com"];
export declare class CreateSyncMapItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSyncMapItemCreateSyncMapItemRequest extends SpeakeasyBase {
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item's parent Sync Map expires (time-to-live) and is deleted.
     */
    collectionTtl?: number;
    /**
     * A JSON string that represents an arbitrary, schema-less object that the Map Item stores. Can be up to 16 KiB in length.
     */
    data: any;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item expires (time-to-live) and is deleted.
     */
    itemTtl?: number;
    /**
     * The unique, user-defined key for the Map Item. Can be up to 320 characters long.
     */
    key: string;
    /**
     * An alias for `item_ttl`. If both parameters are provided, this value is ignored.
     */
    ttl?: number;
}
export declare class CreateSyncMapItemRequest extends SpeakeasyBase {
    /**
     * The SID of the Sync Map to add the new Map Item to. Can be the Sync Map resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    requestBody?: CreateSyncMapItemCreateSyncMapItemRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the Map Item in.
     */
    serviceSid: string;
}
export declare class CreateSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    syncV1ServiceSyncMapSyncMapItem?: shared.SyncV1ServiceSyncMapSyncMapItem;
}
