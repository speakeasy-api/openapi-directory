import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadProjectDocumentPathParams extends SpeakeasyBase {
    documentId: number;
    projectId: number;
}
export declare class DownloadProjectDocumentRequest extends SpeakeasyBase {
    pathParams: DownloadProjectDocumentPathParams;
}
export declare class DownloadProjectDocumentResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    downloadProjectDocument200ApplicationJSONString?: string;
}
