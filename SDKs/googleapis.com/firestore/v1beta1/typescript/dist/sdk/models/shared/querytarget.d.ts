import { SpeakeasyBase } from "../../../internal/utils";
import { StructuredQuery } from "./structuredquery";
/**
 * A target specified by a query.
 */
export declare class QueryTarget extends SpeakeasyBase {
    /**
     * The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;
    /**
     * A Firestore query.
     */
    structuredQuery?: StructuredQuery;
}
