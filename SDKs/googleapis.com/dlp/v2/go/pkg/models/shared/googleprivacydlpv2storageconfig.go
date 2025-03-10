// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GooglePrivacyDlpV2StorageConfig - Shared message indicating Cloud storage type.
type GooglePrivacyDlpV2StorageConfig struct {
	// Options defining BigQuery table and row identifiers.
	BigQueryOptions *GooglePrivacyDlpV2BigQueryOptions `json:"bigQueryOptions,omitempty"`
	// Options defining a file or a set of files within a Cloud Storage bucket.
	CloudStorageOptions *GooglePrivacyDlpV2CloudStorageOptions `json:"cloudStorageOptions,omitempty"`
	// Options defining a data set within Google Cloud Datastore.
	DatastoreOptions *GooglePrivacyDlpV2DatastoreOptions `json:"datastoreOptions,omitempty"`
	// Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
	HybridOptions *GooglePrivacyDlpV2HybridOptions `json:"hybridOptions,omitempty"`
	// Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery.
	TimespanConfig *GooglePrivacyDlpV2TimespanConfig `json:"timespanConfig,omitempty"`
}
