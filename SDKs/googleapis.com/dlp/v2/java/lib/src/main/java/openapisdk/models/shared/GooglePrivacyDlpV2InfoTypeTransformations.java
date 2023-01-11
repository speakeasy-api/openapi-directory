package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InfoTypeTransformations
 * A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.
**/
public class GooglePrivacyDlpV2InfoTypeTransformations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformations")
    public GooglePrivacyDlpV2InfoTypeTransformation[] transformations;
    public GooglePrivacyDlpV2InfoTypeTransformations withTransformations(GooglePrivacyDlpV2InfoTypeTransformation[] transformations) {
        this.transformations = transformations;
        return this;
    }
}