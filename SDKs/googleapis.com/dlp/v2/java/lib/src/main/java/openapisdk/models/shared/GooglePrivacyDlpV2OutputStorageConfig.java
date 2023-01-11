package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2OutputStorageConfig
 * Cloud repository for storing output.
**/
public class GooglePrivacyDlpV2OutputStorageConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputSchema")
    public GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum outputSchema;
    public GooglePrivacyDlpV2OutputStorageConfig withOutputSchema(GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum outputSchema) {
        this.outputSchema = outputSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public GooglePrivacyDlpV2BigQueryTable table;
    public GooglePrivacyDlpV2OutputStorageConfig withTable(GooglePrivacyDlpV2BigQueryTable table) {
        this.table = table;
        return this;
    }
}