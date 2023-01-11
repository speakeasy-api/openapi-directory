package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ReidentifyContentRequest
 * Request to re-identify an item.
**/
public class GooglePrivacyDlpV2ReidentifyContentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectConfig")
    public GooglePrivacyDlpV2InspectConfig inspectConfig;
    public GooglePrivacyDlpV2ReidentifyContentRequest withInspectConfig(GooglePrivacyDlpV2InspectConfig inspectConfig) {
        this.inspectConfig = inspectConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectTemplateName")
    public String inspectTemplateName;
    public GooglePrivacyDlpV2ReidentifyContentRequest withInspectTemplateName(String inspectTemplateName) {
        this.inspectTemplateName = inspectTemplateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public GooglePrivacyDlpV2ContentItem item;
    public GooglePrivacyDlpV2ReidentifyContentRequest withItem(GooglePrivacyDlpV2ContentItem item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public GooglePrivacyDlpV2ReidentifyContentRequest withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reidentifyConfig")
    public GooglePrivacyDlpV2DeidentifyConfig reidentifyConfig;
    public GooglePrivacyDlpV2ReidentifyContentRequest withReidentifyConfig(GooglePrivacyDlpV2DeidentifyConfig reidentifyConfig) {
        this.reidentifyConfig = reidentifyConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reidentifyTemplateName")
    public String reidentifyTemplateName;
    public GooglePrivacyDlpV2ReidentifyContentRequest withReidentifyTemplateName(String reidentifyTemplateName) {
        this.reidentifyTemplateName = reidentifyTemplateName;
        return this;
    }
}