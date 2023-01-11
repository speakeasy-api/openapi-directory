package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ImageTransformation
 * Configuration for determining how redaction of images should occur.
**/
public class GooglePrivacyDlpV2ImageTransformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allInfoTypes")
    public java.util.Map<String, Object> allInfoTypes;
    public GooglePrivacyDlpV2ImageTransformation withAllInfoTypes(java.util.Map<String, Object> allInfoTypes) {
        this.allInfoTypes = allInfoTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allText")
    public java.util.Map<String, Object> allText;
    public GooglePrivacyDlpV2ImageTransformation withAllText(java.util.Map<String, Object> allText) {
        this.allText = allText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redactionColor")
    public GooglePrivacyDlpV2Color redactionColor;
    public GooglePrivacyDlpV2ImageTransformation withRedactionColor(GooglePrivacyDlpV2Color redactionColor) {
        this.redactionColor = redactionColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedInfoTypes")
    public GooglePrivacyDlpV2SelectedInfoTypes selectedInfoTypes;
    public GooglePrivacyDlpV2ImageTransformation withSelectedInfoTypes(GooglePrivacyDlpV2SelectedInfoTypes selectedInfoTypes) {
        this.selectedInfoTypes = selectedInfoTypes;
        return this;
    }
}