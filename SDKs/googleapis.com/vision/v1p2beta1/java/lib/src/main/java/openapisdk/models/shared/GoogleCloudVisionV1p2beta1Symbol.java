package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1Symbol
 * A single symbol representation.
**/
public class GoogleCloudVisionV1p2beta1Symbol {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingBox")
    public GoogleCloudVisionV1p2beta1BoundingPoly boundingBox;
    public GoogleCloudVisionV1p2beta1Symbol withBoundingBox(GoogleCloudVisionV1p2beta1BoundingPoly boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public GoogleCloudVisionV1p2beta1Symbol withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public GoogleCloudVisionV1p2beta1TextAnnotationTextProperty property;
    public GoogleCloudVisionV1p2beta1Symbol withProperty(GoogleCloudVisionV1p2beta1TextAnnotationTextProperty property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public GoogleCloudVisionV1p2beta1Symbol withText(String text) {
        this.text = text;
        return this;
    }
}