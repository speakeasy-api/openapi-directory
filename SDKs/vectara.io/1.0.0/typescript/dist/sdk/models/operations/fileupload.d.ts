import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FileUploadSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    oAuth?: string;
}
export declare class FileUploadRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class FileUploadRequestBody extends SpeakeasyBase {
    /**
     * A JSON string of any additional metadata you want attached to the file.
     */
    docMetadata?: string;
    /**
     * The file to be indexed into Vectara.
     */
    file?: FileUploadRequestBodyFile;
}
export declare class FileUploadRequest extends SpeakeasyBase {
    requestBody?: FileUploadRequestBody;
    /**
     * Customer ID
     */
    c: number;
    /**
     * If true, the server returns the extracted document that was indexed
     */
    d?: boolean;
    /**
     * Corpus ID
     */
    o: number;
}
/**
 * An invalid request was sent.  e.g. one or more parameters was missing, or the corpus does not exist.
 */
export declare class FileUpload400ApplicationJSON extends SpeakeasyBase {
    /**
     * Returned HTTP code
     */
    httpCode?: number;
}
export declare class FileUpload200ApplicationJSONResponseQuotaConsumed extends SpeakeasyBase {
    /**
     * The number of characters Vectara indexed from the file uploaded.
     */
    numChars?: string;
    /**
     * The number of metadata characters Vectara indexed from the file uploaded.
     */
    numMetadataChars?: string;
}
export declare class FileUpload200ApplicationJSONResponse extends SpeakeasyBase {
    quotaConsumed?: FileUpload200ApplicationJSONResponseQuotaConsumed;
    status?: Record<string, any>;
}
/**
 * A successful response
 */
export declare class FileUpload200ApplicationJSON extends SpeakeasyBase {
    response?: FileUpload200ApplicationJSONResponse;
}
export declare class FileUploadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful response
     */
    fileUpload200ApplicationJSONObject?: FileUpload200ApplicationJSON;
    /**
     * An invalid request was sent.  e.g. one or more parameters was missing, or the corpus does not exist.
     */
    fileUpload400ApplicationJSONObject?: FileUpload400ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
