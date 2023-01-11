package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CreateInspectTemplateRequestInput
 * Request message for CreateInspectTemplate.
**/
public class GooglePrivacyDlpV2CreateInspectTemplateRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectTemplate")
    public GooglePrivacyDlpV2InspectTemplateInput inspectTemplate;
    public GooglePrivacyDlpV2CreateInspectTemplateRequestInput withInspectTemplate(GooglePrivacyDlpV2InspectTemplateInput inspectTemplate) {
        this.inspectTemplate = inspectTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public GooglePrivacyDlpV2CreateInspectTemplateRequestInput withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateId")
    public String templateId;
    public GooglePrivacyDlpV2CreateInspectTemplateRequestInput withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}