package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ImageRedactionConfig
 * Configuration for determining how redaction of images should occur.
**/
public class GooglePrivacyDlpV2ImageRedactionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoType")
    public GooglePrivacyDlpV2InfoType infoType;
    public GooglePrivacyDlpV2ImageRedactionConfig withInfoType(GooglePrivacyDlpV2InfoType infoType) {
        this.infoType = infoType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redactAllText")
    public Boolean redactAllText;
    public GooglePrivacyDlpV2ImageRedactionConfig withRedactAllText(Boolean redactAllText) {
        this.redactAllText = redactAllText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redactionColor")
    public GooglePrivacyDlpV2Color redactionColor;
    public GooglePrivacyDlpV2ImageRedactionConfig withRedactionColor(GooglePrivacyDlpV2Color redactionColor) {
        this.redactionColor = redactionColor;
        return this;
    }
}