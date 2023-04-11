import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncMapItemServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncMapItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncMapItemUpdateSyncMapItemRequest extends SpeakeasyBase {
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item's parent Sync Map expires (time-to-live) and is deleted. This parameter can only be used when the Map Item's `data` or `ttl` is updated in the same request.
     */
    collectionTtl?: number;
    /**
     * A JSON string that represents an arbitrary, schema-less object that the Map Item stores. Can be up to 16 KiB in length.
     */
    data?: any;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item expires (time-to-live) and is deleted.
     */
    itemTtl?: number;
    /**
     * An alias for `item_ttl`. If both parameters are provided, this value is ignored.
     */
    ttl?: number;
}
export declare class UpdateSyncMapItemRequest extends SpeakeasyBase {
    /**
     * If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
    /**
     * The `key` value of the Sync Map Item resource to update.
     */
    key: string;
    /**
     * The SID of the Sync Map with the Sync Map Item resource to update. Can be the Sync Map resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    requestBody?: UpdateSyncMapItemUpdateSyncMapItemRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Item resource to update.
     */
    serviceSid: string;
}
export declare class UpdateSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncMapSyncMapItem?: shared.SyncV1ServiceSyncMapSyncMapItem;
}
