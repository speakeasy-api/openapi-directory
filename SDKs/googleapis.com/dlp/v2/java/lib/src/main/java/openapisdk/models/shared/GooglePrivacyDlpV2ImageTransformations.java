package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ImageTransformations
 * A type of transformation that is applied over images.
**/
public class GooglePrivacyDlpV2ImageTransformations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transforms")
    public GooglePrivacyDlpV2ImageTransformation[] transforms;
    public GooglePrivacyDlpV2ImageTransformations withTransforms(GooglePrivacyDlpV2ImageTransformation[] transforms) {
        this.transforms = transforms;
        return this;
    }
}