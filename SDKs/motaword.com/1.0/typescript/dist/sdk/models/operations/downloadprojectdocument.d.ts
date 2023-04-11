import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadProjectDocumentRequest extends SpeakeasyBase {
    /**
     * Document ID
     */
    documentId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class DownloadProjectDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DocumentNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Document streamed
     */
    downloadProjectDocument200ApplicationJSONString?: string;
}
