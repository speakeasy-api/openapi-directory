package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DeidentifyContentResponse
 * Results of de-identifying a ContentItem.
**/
public class GooglePrivacyDlpV2DeidentifyContentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public GooglePrivacyDlpV2ContentItem item;
    public GooglePrivacyDlpV2DeidentifyContentResponse withItem(GooglePrivacyDlpV2ContentItem item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overview")
    public GooglePrivacyDlpV2TransformationOverview overview;
    public GooglePrivacyDlpV2DeidentifyContentResponse withOverview(GooglePrivacyDlpV2TransformationOverview overview) {
        this.overview = overview;
        return this;
    }
}