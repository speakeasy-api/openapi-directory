package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1Paragraph
 * Structural unit of text representing a number of words in certain order.
**/
public class GoogleCloudVisionV1p1beta1Paragraph {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingBox")
    public GoogleCloudVisionV1p1beta1BoundingPoly boundingBox;
    public GoogleCloudVisionV1p1beta1Paragraph withBoundingBox(GoogleCloudVisionV1p1beta1BoundingPoly boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public GoogleCloudVisionV1p1beta1Paragraph withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public GoogleCloudVisionV1p1beta1TextAnnotationTextProperty property;
    public GoogleCloudVisionV1p1beta1Paragraph withProperty(GoogleCloudVisionV1p1beta1TextAnnotationTextProperty property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("words")
    public GoogleCloudVisionV1p1beta1Word[] words;
    public GoogleCloudVisionV1p1beta1Paragraph withWords(GoogleCloudVisionV1p1beta1Word[] words) {
        this.words = words;
        return this;
    }
}