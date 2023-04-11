import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncListServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteSyncListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncListRequest extends SpeakeasyBase {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the Sync List resource to delete. Can be the Sync List resource's `sid` or its `unique_name`.
     */
    sid: string;
}
export declare class DeleteSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
