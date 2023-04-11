import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSyncListItemServerList: readonly ["https://sync.twilio.com"];
export declare class CreateSyncListItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSyncListItemCreateSyncListItemRequest extends SpeakeasyBase {
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item's parent Sync List expires (time-to-live) and is deleted.
     */
    collectionTtl?: number;
    /**
     * A JSON string that represents an arbitrary, schema-less object that the List Item stores. Can be up to 16 KiB in length.
     */
    data: any;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item expires (time-to-live) and is deleted.
     */
    itemTtl?: number;
    /**
     * An alias for `item_ttl`. If both parameters are provided, this value is ignored.
     */
    ttl?: number;
}
export declare class CreateSyncListItemRequest extends SpeakeasyBase {
    /**
     * The SID of the Sync List to add the new List Item to. Can be the Sync List resource's `sid` or its `unique_name`.
     */
    listSid: string;
    requestBody?: CreateSyncListItemCreateSyncListItemRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the new List Item in.
     */
    serviceSid: string;
}
export declare class CreateSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    syncV1ServiceSyncListSyncListItem?: shared.SyncV1ServiceSyncListSyncListItem;
}
