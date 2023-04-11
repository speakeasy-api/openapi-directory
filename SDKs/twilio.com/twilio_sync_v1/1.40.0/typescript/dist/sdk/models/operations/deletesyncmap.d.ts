import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncMapServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteSyncMapSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncMapRequest extends SpeakeasyBase {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Map resource to delete. Can be the Sync Map's `sid` or its `unique_name`.
     */
    sid: string;
}
export declare class DeleteSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
