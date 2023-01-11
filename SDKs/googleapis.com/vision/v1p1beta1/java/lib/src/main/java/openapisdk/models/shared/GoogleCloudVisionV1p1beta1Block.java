package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1Block
 * Logical element on the page.
**/
public class GoogleCloudVisionV1p1beta1Block {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockType")
    public GoogleCloudVisionV1p1beta1BlockBlockTypeEnum blockType;
    public GoogleCloudVisionV1p1beta1Block withBlockType(GoogleCloudVisionV1p1beta1BlockBlockTypeEnum blockType) {
        this.blockType = blockType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingBox")
    public GoogleCloudVisionV1p1beta1BoundingPoly boundingBox;
    public GoogleCloudVisionV1p1beta1Block withBoundingBox(GoogleCloudVisionV1p1beta1BoundingPoly boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public GoogleCloudVisionV1p1beta1Block withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paragraphs")
    public GoogleCloudVisionV1p1beta1Paragraph[] paragraphs;
    public GoogleCloudVisionV1p1beta1Block withParagraphs(GoogleCloudVisionV1p1beta1Paragraph[] paragraphs) {
        this.paragraphs = paragraphs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public GoogleCloudVisionV1p1beta1TextAnnotationTextProperty property;
    public GoogleCloudVisionV1p1beta1Block withProperty(GoogleCloudVisionV1p1beta1TextAnnotationTextProperty property) {
        this.property = property;
        return this;
    }
}