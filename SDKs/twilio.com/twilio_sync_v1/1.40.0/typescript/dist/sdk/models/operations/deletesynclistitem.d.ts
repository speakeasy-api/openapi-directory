import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncListItemServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteSyncListItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncListItemRequest extends SpeakeasyBase {
    /**
     * If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
    /**
     * The index of the Sync List Item resource to delete.
     */
    index: number;
    /**
     * The SID of the Sync List with the Sync List Item resource to delete. Can be the Sync List resource's `sid` or its `unique_name`.
     */
    listSid: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List Item resource to delete.
     */
    serviceSid: string;
}
export declare class DeleteSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
