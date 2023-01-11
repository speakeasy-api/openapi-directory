package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2StorageConfig
 * Shared message indicating Cloud storage type.
**/
public class GooglePrivacyDlpV2StorageConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigQueryOptions")
    public GooglePrivacyDlpV2BigQueryOptions bigQueryOptions;
    public GooglePrivacyDlpV2StorageConfig withBigQueryOptions(GooglePrivacyDlpV2BigQueryOptions bigQueryOptions) {
        this.bigQueryOptions = bigQueryOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudStorageOptions")
    public GooglePrivacyDlpV2CloudStorageOptions cloudStorageOptions;
    public GooglePrivacyDlpV2StorageConfig withCloudStorageOptions(GooglePrivacyDlpV2CloudStorageOptions cloudStorageOptions) {
        this.cloudStorageOptions = cloudStorageOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastoreOptions")
    public GooglePrivacyDlpV2DatastoreOptions datastoreOptions;
    public GooglePrivacyDlpV2StorageConfig withDatastoreOptions(GooglePrivacyDlpV2DatastoreOptions datastoreOptions) {
        this.datastoreOptions = datastoreOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hybridOptions")
    public GooglePrivacyDlpV2HybridOptions hybridOptions;
    public GooglePrivacyDlpV2StorageConfig withHybridOptions(GooglePrivacyDlpV2HybridOptions hybridOptions) {
        this.hybridOptions = hybridOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timespanConfig")
    public GooglePrivacyDlpV2TimespanConfig timespanConfig;
    public GooglePrivacyDlpV2StorageConfig withTimespanConfig(GooglePrivacyDlpV2TimespanConfig timespanConfig) {
        this.timespanConfig = timespanConfig;
        return this;
    }
}