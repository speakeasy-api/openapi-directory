package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1CropHintsAnnotation
 * Set of crop hints that are used to generate new crops when serving images.
**/
public class GoogleCloudVisionV1p1beta1CropHintsAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cropHints")
    public GoogleCloudVisionV1p1beta1CropHint[] cropHints;
    public GoogleCloudVisionV1p1beta1CropHintsAnnotation withCropHints(GoogleCloudVisionV1p1beta1CropHint[] cropHints) {
        this.cropHints = cropHints;
        return this;
    }
}