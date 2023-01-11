package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ReidentifyContentResponse
 * Results of re-identifying an item.
**/
public class GooglePrivacyDlpV2ReidentifyContentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public GooglePrivacyDlpV2ContentItem item;
    public GooglePrivacyDlpV2ReidentifyContentResponse withItem(GooglePrivacyDlpV2ContentItem item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overview")
    public GooglePrivacyDlpV2TransformationOverview overview;
    public GooglePrivacyDlpV2ReidentifyContentResponse withOverview(GooglePrivacyDlpV2TransformationOverview overview) {
        this.overview = overview;
        return this;
    }
}