package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DeidentifyContentRequest
 * Request to de-identify a ContentItem.
**/
public class GooglePrivacyDlpV2DeidentifyContentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deidentifyConfig")
    public GooglePrivacyDlpV2DeidentifyConfig deidentifyConfig;
    public GooglePrivacyDlpV2DeidentifyContentRequest withDeidentifyConfig(GooglePrivacyDlpV2DeidentifyConfig deidentifyConfig) {
        this.deidentifyConfig = deidentifyConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deidentifyTemplateName")
    public String deidentifyTemplateName;
    public GooglePrivacyDlpV2DeidentifyContentRequest withDeidentifyTemplateName(String deidentifyTemplateName) {
        this.deidentifyTemplateName = deidentifyTemplateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectConfig")
    public GooglePrivacyDlpV2InspectConfig inspectConfig;
    public GooglePrivacyDlpV2DeidentifyContentRequest withInspectConfig(GooglePrivacyDlpV2InspectConfig inspectConfig) {
        this.inspectConfig = inspectConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectTemplateName")
    public String inspectTemplateName;
    public GooglePrivacyDlpV2DeidentifyContentRequest withInspectTemplateName(String inspectTemplateName) {
        this.inspectTemplateName = inspectTemplateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public GooglePrivacyDlpV2ContentItem item;
    public GooglePrivacyDlpV2DeidentifyContentRequest withItem(GooglePrivacyDlpV2ContentItem item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public GooglePrivacyDlpV2DeidentifyContentRequest withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}