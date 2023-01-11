package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput
 * Request message for CreateDeidentifyTemplate.
**/
public class GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deidentifyTemplate")
    public GooglePrivacyDlpV2DeidentifyTemplateInput deidentifyTemplate;
    public GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput withDeidentifyTemplate(GooglePrivacyDlpV2DeidentifyTemplateInput deidentifyTemplate) {
        this.deidentifyTemplate = deidentifyTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateId")
    public String templateId;
    public GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}