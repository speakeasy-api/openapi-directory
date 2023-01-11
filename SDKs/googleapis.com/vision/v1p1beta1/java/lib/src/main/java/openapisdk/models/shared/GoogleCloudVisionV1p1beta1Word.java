package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1Word
 * A word representation.
**/
public class GoogleCloudVisionV1p1beta1Word {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingBox")
    public GoogleCloudVisionV1p1beta1BoundingPoly boundingBox;
    public GoogleCloudVisionV1p1beta1Word withBoundingBox(GoogleCloudVisionV1p1beta1BoundingPoly boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public GoogleCloudVisionV1p1beta1Word withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public GoogleCloudVisionV1p1beta1TextAnnotationTextProperty property;
    public GoogleCloudVisionV1p1beta1Word withProperty(GoogleCloudVisionV1p1beta1TextAnnotationTextProperty property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symbols")
    public GoogleCloudVisionV1p1beta1Symbol[] symbols;
    public GoogleCloudVisionV1p1beta1Word withSymbols(GoogleCloudVisionV1p1beta1Symbol[] symbols) {
        this.symbols = symbols;
        return this;
    }
}