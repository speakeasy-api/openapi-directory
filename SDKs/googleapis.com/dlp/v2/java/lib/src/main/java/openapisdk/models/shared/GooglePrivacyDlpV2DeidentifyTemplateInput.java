package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DeidentifyTemplateInput
 * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
public class GooglePrivacyDlpV2DeidentifyTemplateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deidentifyConfig")
    public GooglePrivacyDlpV2DeidentifyConfig deidentifyConfig;
    public GooglePrivacyDlpV2DeidentifyTemplateInput withDeidentifyConfig(GooglePrivacyDlpV2DeidentifyConfig deidentifyConfig) {
        this.deidentifyConfig = deidentifyConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GooglePrivacyDlpV2DeidentifyTemplateInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GooglePrivacyDlpV2DeidentifyTemplateInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}