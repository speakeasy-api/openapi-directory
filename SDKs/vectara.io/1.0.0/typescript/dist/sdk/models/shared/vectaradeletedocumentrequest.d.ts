import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to delete a document from an index.
 */
export declare class VectaraDeleteDocumentRequest extends SpeakeasyBase {
    /**
     * The Corpus ID that contains the document.
     */
    corpusId?: string;
    /**
     * The Customer ID to issue the request for.
     */
    customerId?: string;
    /**
     * The Document ID to be deleted.
     */
    documentId?: string;
}
