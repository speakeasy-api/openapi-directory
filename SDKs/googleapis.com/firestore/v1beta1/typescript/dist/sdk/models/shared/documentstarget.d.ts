import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A target specified by a set of documents names.
 */
export declare class DocumentsTarget extends SpeakeasyBase {
    /**
     * The names of the documents to retrieve. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. The request will fail if any of the document is not a child resource of the given `database`. Duplicate names will be elided.
     */
    documents?: string[];
}
