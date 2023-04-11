import { SpeakeasyBase } from "../../../internal/utils";
import { VectaraindexingDocument } from "./vectaraindexingdocument";
export declare class VectaraIndexDocumentRequest extends SpeakeasyBase {
    corpusId?: string;
    customerId?: string;
    /**
     * A document to index.
     */
    document?: VectaraindexingDocument;
}
