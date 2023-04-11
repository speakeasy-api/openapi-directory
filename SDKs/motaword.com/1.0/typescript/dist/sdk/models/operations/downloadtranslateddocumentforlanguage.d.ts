import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadTranslatedDocumentForLanguageRequest extends SpeakeasyBase {
    /**
     * Download certified translation
     */
    certified?: boolean;
    /**
     * Document ID
     */
    documentId: number;
    /**
     * Target language code.
     */
    language: string;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class DownloadTranslatedDocumentForLanguageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DocumentNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * File
     */
    downloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString?: Uint8Array;
}
