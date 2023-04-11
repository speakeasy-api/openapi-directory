import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for FirestoreAdmin.ExportDocuments.
 */
export declare class GoogleFirestoreAdminV1beta1ExportDocumentsRequest extends SpeakeasyBase {
    /**
     * Which collection ids to export. Unspecified means all collections.
     */
    collectionIds?: string[];
    /**
     * The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time.
     */
    outputUriPrefix?: string;
}
