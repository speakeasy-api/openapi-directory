import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class FetchSyncDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncDocumentRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchSyncDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceDocument?: shared.PreviewSyncServiceDocument;
}
