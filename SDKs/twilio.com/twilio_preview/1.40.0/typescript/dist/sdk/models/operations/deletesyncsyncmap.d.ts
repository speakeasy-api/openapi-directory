import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncSyncMapServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncSyncMapSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncSyncMapRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteSyncSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
