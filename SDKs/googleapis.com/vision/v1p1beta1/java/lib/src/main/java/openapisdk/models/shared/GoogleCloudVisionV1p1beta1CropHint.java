package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1CropHint
 * Single crop hint that is used to generate a new crop when serving an image.
**/
public class GoogleCloudVisionV1p1beta1CropHint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingPoly")
    public GoogleCloudVisionV1p1beta1BoundingPoly boundingPoly;
    public GoogleCloudVisionV1p1beta1CropHint withBoundingPoly(GoogleCloudVisionV1p1beta1BoundingPoly boundingPoly) {
        this.boundingPoly = boundingPoly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public GoogleCloudVisionV1p1beta1CropHint withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importanceFraction")
    public Float importanceFraction;
    public GoogleCloudVisionV1p1beta1CropHint withImportanceFraction(Float importanceFraction) {
        this.importanceFraction = importanceFraction;
        return this;
    }
}