import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadTranslatedDocumentForLanguagePathParams extends SpeakeasyBase {
    documentId: number;
    language: string;
    projectId: number;
}
export declare class DownloadTranslatedDocumentForLanguageQueryParams extends SpeakeasyBase {
    certified?: boolean;
}
export declare class DownloadTranslatedDocumentForLanguageRequest extends SpeakeasyBase {
    pathParams: DownloadTranslatedDocumentForLanguagePathParams;
    queryParams: DownloadTranslatedDocumentForLanguageQueryParams;
}
export declare class DownloadTranslatedDocumentForLanguageResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    downloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString?: Uint8Array;
}
