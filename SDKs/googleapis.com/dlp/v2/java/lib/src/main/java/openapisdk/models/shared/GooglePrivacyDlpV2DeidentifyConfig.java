package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DeidentifyConfig
 * The configuration that controls how the data will change.
**/
public class GooglePrivacyDlpV2DeidentifyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTransformations")
    public GooglePrivacyDlpV2ImageTransformations imageTransformations;
    public GooglePrivacyDlpV2DeidentifyConfig withImageTransformations(GooglePrivacyDlpV2ImageTransformations imageTransformations) {
        this.imageTransformations = imageTransformations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoTypeTransformations")
    public GooglePrivacyDlpV2InfoTypeTransformations infoTypeTransformations;
    public GooglePrivacyDlpV2DeidentifyConfig withInfoTypeTransformations(GooglePrivacyDlpV2InfoTypeTransformations infoTypeTransformations) {
        this.infoTypeTransformations = infoTypeTransformations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordTransformations")
    public GooglePrivacyDlpV2RecordTransformations recordTransformations;
    public GooglePrivacyDlpV2DeidentifyConfig withRecordTransformations(GooglePrivacyDlpV2RecordTransformations recordTransformations) {
        this.recordTransformations = recordTransformations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformationErrorHandling")
    public GooglePrivacyDlpV2TransformationErrorHandling transformationErrorHandling;
    public GooglePrivacyDlpV2DeidentifyConfig withTransformationErrorHandling(GooglePrivacyDlpV2TransformationErrorHandling transformationErrorHandling) {
        this.transformationErrorHandling = transformationErrorHandling;
        return this;
    }
}