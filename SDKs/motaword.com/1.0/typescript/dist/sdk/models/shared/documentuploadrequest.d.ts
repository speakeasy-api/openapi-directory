import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedSourceDocument } from "./linkedsourcedocument";
export declare class DocumentUploadRequest extends SpeakeasyBase {
    /**
     * Single file data. The name is plural to provide a consistent naming convention.
     */
    documents?: Uint8Array;
    /**
     * JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.
     */
    schemes?: string;
    sourceLink?: LinkedSourceDocument;
}
