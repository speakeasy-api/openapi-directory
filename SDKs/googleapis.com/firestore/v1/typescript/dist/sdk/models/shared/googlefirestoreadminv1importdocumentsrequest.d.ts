import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for FirestoreAdmin.ImportDocuments.
 */
export declare class GoogleFirestoreAdminV1ImportDocumentsRequest extends SpeakeasyBase {
    /**
     * Which collection ids to import. Unspecified means all collections included in the import.
     */
    collectionIds?: string[];
    /**
     * Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1.ExportDocumentsResponse.output_uri_prefix.
     */
    inputUriPrefix?: string;
    /**
     * An empty list represents all namespaces. This is the preferred usage for databases that don't use namespaces. An empty string element represents the default namespace. This should be used if the database has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.
     */
    namespaceIds?: string[];
}
