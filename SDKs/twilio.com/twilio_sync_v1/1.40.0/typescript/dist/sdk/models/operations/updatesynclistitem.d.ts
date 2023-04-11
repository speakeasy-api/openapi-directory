import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncListItemServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncListItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncListItemUpdateSyncListItemRequest extends SpeakeasyBase {
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item's parent Sync List expires (time-to-live) and is deleted. This parameter can only be used when the List Item's `data` or `ttl` is updated in the same request.
     */
    collectionTtl?: number;
    /**
     * A JSON string that represents an arbitrary, schema-less object that the List Item stores. Can be up to 16 KiB in length.
     */
    data?: any;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item expires (time-to-live) and is deleted.
     */
    itemTtl?: number;
    /**
     * An alias for `item_ttl`. If both parameters are provided, this value is ignored.
     */
    ttl?: number;
}
export declare class UpdateSyncListItemRequest extends SpeakeasyBase {
    /**
     * If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
    /**
     * The index of the Sync List Item resource to update.
     */
    index: number;
    /**
     * The SID of the Sync List with the Sync List Item resource to update. Can be the Sync List resource's `sid` or its `unique_name`.
     */
    listSid: string;
    requestBody?: UpdateSyncListItemUpdateSyncListItemRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List Item resource to update.
     */
    serviceSid: string;
}
export declare class UpdateSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncListSyncListItem?: shared.SyncV1ServiceSyncListSyncListItem;
}
