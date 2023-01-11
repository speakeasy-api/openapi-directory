package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2HybridFindingDetails
 * Populate to associate additional data with each finding.
**/
public class GooglePrivacyDlpV2HybridFindingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerDetails")
    public GooglePrivacyDlpV2Container containerDetails;
    public GooglePrivacyDlpV2HybridFindingDetails withContainerDetails(GooglePrivacyDlpV2Container containerDetails) {
        this.containerDetails = containerDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileOffset")
    public String fileOffset;
    public GooglePrivacyDlpV2HybridFindingDetails withFileOffset(String fileOffset) {
        this.fileOffset = fileOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GooglePrivacyDlpV2HybridFindingDetails withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowOffset")
    public String rowOffset;
    public GooglePrivacyDlpV2HybridFindingDetails withRowOffset(String rowOffset) {
        this.rowOffset = rowOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableOptions")
    public GooglePrivacyDlpV2TableOptions tableOptions;
    public GooglePrivacyDlpV2HybridFindingDetails withTableOptions(GooglePrivacyDlpV2TableOptions tableOptions) {
        this.tableOptions = tableOptions;
        return this;
    }
}