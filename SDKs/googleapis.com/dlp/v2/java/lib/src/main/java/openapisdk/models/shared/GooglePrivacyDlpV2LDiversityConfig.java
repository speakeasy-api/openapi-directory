package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2LDiversityConfig
 * l-diversity metric, used for analysis of reidentification risk.
**/
public class GooglePrivacyDlpV2LDiversityConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quasiIds")
    public GooglePrivacyDlpV2FieldId[] quasiIds;
    public GooglePrivacyDlpV2LDiversityConfig withQuasiIds(GooglePrivacyDlpV2FieldId[] quasiIds) {
        this.quasiIds = quasiIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitiveAttribute")
    public GooglePrivacyDlpV2FieldId sensitiveAttribute;
    public GooglePrivacyDlpV2LDiversityConfig withSensitiveAttribute(GooglePrivacyDlpV2FieldId sensitiveAttribute) {
        this.sensitiveAttribute = sensitiveAttribute;
        return this;
    }
}