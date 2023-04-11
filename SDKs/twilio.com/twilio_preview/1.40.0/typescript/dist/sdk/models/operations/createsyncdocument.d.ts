import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSyncDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class CreateSyncDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSyncDocumentCreateSyncDocumentRequest extends SpeakeasyBase {
    data?: any;
    uniqueName?: string;
}
export declare class CreateSyncDocumentRequest extends SpeakeasyBase {
    requestBody?: CreateSyncDocumentCreateSyncDocumentRequest;
    serviceSid: string;
}
export declare class CreateSyncDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewSyncServiceDocument?: shared.PreviewSyncServiceDocument;
}
