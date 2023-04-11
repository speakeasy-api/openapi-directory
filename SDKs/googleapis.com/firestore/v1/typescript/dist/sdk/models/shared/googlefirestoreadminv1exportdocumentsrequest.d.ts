import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for FirestoreAdmin.ExportDocuments.
 */
export declare class GoogleFirestoreAdminV1ExportDocumentsRequest extends SpeakeasyBase {
    /**
     * Which collection ids to export. Unspecified means all collections.
     */
    collectionIds?: string[];
    /**
     * An empty list represents all namespaces. This is the preferred usage for databases that don't use namespaces. An empty string element represents the default namespace. This should be used if the database has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.
     */
    namespaceIds?: string[];
    /**
     * The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time.
     */
    outputUriPrefix?: string;
}
