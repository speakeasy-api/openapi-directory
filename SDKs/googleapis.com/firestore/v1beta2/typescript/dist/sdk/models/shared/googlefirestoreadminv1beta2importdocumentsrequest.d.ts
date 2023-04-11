import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for FirestoreAdmin.ImportDocuments.
 */
export declare class GoogleFirestoreAdminV1beta2ImportDocumentsRequest extends SpeakeasyBase {
    /**
     * Which collection ids to import. Unspecified means all collections included in the import.
     */
    collectionIds?: string[];
    /**
     * Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta2.ExportDocumentsResponse.output_uri_prefix.
     */
    inputUriPrefix?: string;
}
