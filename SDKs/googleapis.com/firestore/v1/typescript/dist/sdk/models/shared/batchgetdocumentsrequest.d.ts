import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentMask } from "./documentmask";
import { TransactionOptions } from "./transactionoptions";
/**
 * The request for Firestore.BatchGetDocuments.
 */
export declare class BatchGetDocumentsRequest extends SpeakeasyBase {
    /**
     * The names of the documents to retrieve. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. The request will fail if any of the document is not a child resource of the given `database`. Duplicate names will be elided.
     */
    documents?: string[];
    /**
     * A set of field paths on a document. Used to restrict a get or update operation on a document to a subset of its fields. This is different from standard field masks, as this is always scoped to a Document, and takes in account the dynamic nature of Value.
     */
    mask?: DocumentMask;
    /**
     * Options for creating a new transaction.
     */
    newTransaction?: TransactionOptions;
    /**
     * Reads documents as they were at the given time. This may not be older than 270 seconds.
     */
    readTime?: string;
    /**
     * Reads documents in a transaction.
     */
    transaction?: string;
}
