package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2HybridOptions
 * Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
**/
public class GooglePrivacyDlpV2HybridOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GooglePrivacyDlpV2HybridOptions withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GooglePrivacyDlpV2HybridOptions withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredFindingLabelKeys")
    public String[] requiredFindingLabelKeys;
    public GooglePrivacyDlpV2HybridOptions withRequiredFindingLabelKeys(String[] requiredFindingLabelKeys) {
        this.requiredFindingLabelKeys = requiredFindingLabelKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableOptions")
    public GooglePrivacyDlpV2TableOptions tableOptions;
    public GooglePrivacyDlpV2HybridOptions withTableOptions(GooglePrivacyDlpV2TableOptions tableOptions) {
        this.tableOptions = tableOptions;
        return this;
    }
}