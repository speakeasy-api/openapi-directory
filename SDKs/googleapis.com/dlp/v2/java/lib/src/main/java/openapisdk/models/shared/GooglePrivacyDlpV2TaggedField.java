package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2TaggedField
 * A column with a semantic tag attached.
**/
public class GooglePrivacyDlpV2TaggedField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customTag")
    public String customTag;
    public GooglePrivacyDlpV2TaggedField withCustomTag(String customTag) {
        this.customTag = customTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public GooglePrivacyDlpV2FieldId field;
    public GooglePrivacyDlpV2TaggedField withField(GooglePrivacyDlpV2FieldId field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inferred")
    public java.util.Map<String, Object> inferred;
    public GooglePrivacyDlpV2TaggedField withInferred(java.util.Map<String, Object> inferred) {
        this.inferred = inferred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoType")
    public GooglePrivacyDlpV2InfoType infoType;
    public GooglePrivacyDlpV2TaggedField withInfoType(GooglePrivacyDlpV2InfoType infoType) {
        this.infoType = infoType;
        return this;
    }
}