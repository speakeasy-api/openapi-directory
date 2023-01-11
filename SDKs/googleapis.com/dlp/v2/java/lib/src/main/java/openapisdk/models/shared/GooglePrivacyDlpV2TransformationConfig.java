package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2TransformationConfig
 * User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config.
**/
public class GooglePrivacyDlpV2TransformationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deidentifyTemplate")
    public String deidentifyTemplate;
    public GooglePrivacyDlpV2TransformationConfig withDeidentifyTemplate(String deidentifyTemplate) {
        this.deidentifyTemplate = deidentifyTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageRedactTemplate")
    public String imageRedactTemplate;
    public GooglePrivacyDlpV2TransformationConfig withImageRedactTemplate(String imageRedactTemplate) {
        this.imageRedactTemplate = imageRedactTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structuredDeidentifyTemplate")
    public String structuredDeidentifyTemplate;
    public GooglePrivacyDlpV2TransformationConfig withStructuredDeidentifyTemplate(String structuredDeidentifyTemplate) {
        this.structuredDeidentifyTemplate = structuredDeidentifyTemplate;
        return this;
    }
}