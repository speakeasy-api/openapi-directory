import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncSyncMapItemServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncSyncMapItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncSyncMapItemRequest extends SpeakeasyBase {
    /**
     * The If-Match HTTP request header
     */
    ifMatch?: string;
    key: string;
    mapSid: string;
    serviceSid: string;
}
export declare class DeleteSyncSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
