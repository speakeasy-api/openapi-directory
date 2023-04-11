import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedSourceDocument } from "./linkedsourcedocument";
export declare class DocumentUpdates extends SpeakeasyBase {
    /**
     * You can add as many files as you want in documents[] parameter.
     */
    documents?: Uint8Array[];
    /**
     * JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.
     */
    schemes?: string;
    /**
     * When provided, we will download the files from these URLs, in addition to files provded in `documents` parameter and then save as source documents
     */
    sourceLinks?: LinkedSourceDocument[];
}
