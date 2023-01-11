package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2TransformationDetailsStorageConfig
 * Config for storing transformation details.
**/
public class GooglePrivacyDlpV2TransformationDetailsStorageConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public GooglePrivacyDlpV2BigQueryTable table;
    public GooglePrivacyDlpV2TransformationDetailsStorageConfig withTable(GooglePrivacyDlpV2BigQueryTable table) {
        this.table = table;
        return this;
    }
}