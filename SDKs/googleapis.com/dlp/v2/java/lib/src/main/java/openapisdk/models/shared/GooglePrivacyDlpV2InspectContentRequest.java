package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InspectContentRequest
 * Request to search for potentially sensitive info in a ContentItem.
**/
public class GooglePrivacyDlpV2InspectContentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectConfig")
    public GooglePrivacyDlpV2InspectConfig inspectConfig;
    public GooglePrivacyDlpV2InspectContentRequest withInspectConfig(GooglePrivacyDlpV2InspectConfig inspectConfig) {
        this.inspectConfig = inspectConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectTemplateName")
    public String inspectTemplateName;
    public GooglePrivacyDlpV2InspectContentRequest withInspectTemplateName(String inspectTemplateName) {
        this.inspectTemplateName = inspectTemplateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public GooglePrivacyDlpV2ContentItem item;
    public GooglePrivacyDlpV2InspectContentRequest withItem(GooglePrivacyDlpV2ContentItem item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public GooglePrivacyDlpV2InspectContentRequest withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}