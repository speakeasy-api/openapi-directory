import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateSyncDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncDocumentUpdateSyncDocumentRequest extends SpeakeasyBase {
    data: any;
}
export declare class UpdateSyncDocumentRequest extends SpeakeasyBase {
    /**
     * The If-Match HTTP request header
     */
    ifMatch?: string;
    requestBody?: UpdateSyncDocumentUpdateSyncDocumentRequest;
    serviceSid: string;
    sid: string;
}
export declare class UpdateSyncDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceDocument?: shared.PreviewSyncServiceDocument;
}
