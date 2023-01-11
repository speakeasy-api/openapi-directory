package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2HybridContentItem
 * An individual hybrid item to inspect. Will be stored temporarily during processing.
**/
public class GooglePrivacyDlpV2HybridContentItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingDetails")
    public GooglePrivacyDlpV2HybridFindingDetails findingDetails;
    public GooglePrivacyDlpV2HybridContentItem withFindingDetails(GooglePrivacyDlpV2HybridFindingDetails findingDetails) {
        this.findingDetails = findingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public GooglePrivacyDlpV2ContentItem item;
    public GooglePrivacyDlpV2HybridContentItem withItem(GooglePrivacyDlpV2ContentItem item) {
        this.item = item;
        return this;
    }
}