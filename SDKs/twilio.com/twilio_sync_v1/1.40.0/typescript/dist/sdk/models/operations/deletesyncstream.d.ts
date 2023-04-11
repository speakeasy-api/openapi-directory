import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncStreamServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteSyncStreamSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncStreamRequest extends SpeakeasyBase {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Stream resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the Stream resource to delete.
     */
    sid: string;
}
export declare class DeleteSyncStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
