import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * The streamed response for Firestore.BatchGetDocuments.
 */
export declare class BatchGetDocumentsResponse extends SpeakeasyBase {
    /**
     * A Firestore document. Must not exceed 1 MiB - 4 bytes.
     */
    found?: Document;
    /**
     * A document name that was requested but does not exist. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    missing?: string;
    /**
     * The time at which the document was read. This may be monotically increasing, in this case the previous documents in the result stream are guaranteed not to have changed between their read_time and this one.
     */
    readTime?: string;
    /**
     * The transaction that was started as part of this request. Will only be set in the first response, and only if BatchGetDocumentsRequest.new_transaction was set in the request.
     */
    transaction?: string;
}
