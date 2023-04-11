import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Dataset template used for dynamic dataset creation.
 */
export declare class DatasetTemplate extends SpeakeasyBase {
    /**
     * If supplied, every created dataset will have its name prefixed by the provided value. The prefix and name will be separated by an underscore. i.e. _.
     */
    datasetIdPrefix?: string;
    /**
     * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}. See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.
     */
    kmsKeyName?: string;
    /**
     * Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.
     */
    location?: string;
}
