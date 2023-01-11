package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2QuasiIdField
 * A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
**/
public class GooglePrivacyDlpV2QuasiIdField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customTag")
    public String customTag;
    public GooglePrivacyDlpV2QuasiIdField withCustomTag(String customTag) {
        this.customTag = customTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public GooglePrivacyDlpV2FieldId field;
    public GooglePrivacyDlpV2QuasiIdField withField(GooglePrivacyDlpV2FieldId field) {
        this.field = field;
        return this;
    }
}