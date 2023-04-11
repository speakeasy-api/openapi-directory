import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncDocumentRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteSyncDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
