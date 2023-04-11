import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedSourceDocument } from "./linkedsourcedocument";
export declare class DocumentUploadRequestDocuments extends SpeakeasyBase {
    content: Uint8Array;
    documents: string;
}
export declare class DocumentUploadRequest1 extends SpeakeasyBase {
    /**
     * Single file data. The name is plural to provide a consistent naming convention.
     */
    documents?: DocumentUploadRequestDocuments;
    /**
     * JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.
     */
    schemes?: string;
    sourceLink?: LinkedSourceDocument;
}
