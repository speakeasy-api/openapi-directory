import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncMapItemServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteSyncMapItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncMapItemRequest extends SpeakeasyBase {
    /**
     * If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
    /**
     * The `key` value of the Sync Map Item resource to delete.
     */
    key: string;
    /**
     * The SID of the Sync Map with the Sync Map Item resource to delete. Can be the Sync Map resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Item resource to delete.
     */
    serviceSid: string;
}
export declare class DeleteSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
