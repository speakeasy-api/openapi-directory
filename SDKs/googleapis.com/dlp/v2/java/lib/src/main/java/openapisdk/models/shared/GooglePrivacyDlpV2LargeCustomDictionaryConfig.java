package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2LargeCustomDictionaryConfig
 * Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.
**/
public class GooglePrivacyDlpV2LargeCustomDictionaryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigQueryField")
    public GooglePrivacyDlpV2BigQueryField bigQueryField;
    public GooglePrivacyDlpV2LargeCustomDictionaryConfig withBigQueryField(GooglePrivacyDlpV2BigQueryField bigQueryField) {
        this.bigQueryField = bigQueryField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudStorageFileSet")
    public GooglePrivacyDlpV2CloudStorageFileSet cloudStorageFileSet;
    public GooglePrivacyDlpV2LargeCustomDictionaryConfig withCloudStorageFileSet(GooglePrivacyDlpV2CloudStorageFileSet cloudStorageFileSet) {
        this.cloudStorageFileSet = cloudStorageFileSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputPath")
    public GooglePrivacyDlpV2CloudStoragePath outputPath;
    public GooglePrivacyDlpV2LargeCustomDictionaryConfig withOutputPath(GooglePrivacyDlpV2CloudStoragePath outputPath) {
        this.outputPath = outputPath;
        return this;
    }
}