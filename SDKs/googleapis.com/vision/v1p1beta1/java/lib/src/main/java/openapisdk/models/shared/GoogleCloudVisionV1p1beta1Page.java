package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1Page
 * Detected page from OCR.
**/
public class GoogleCloudVisionV1p1beta1Page {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blocks")
    public GoogleCloudVisionV1p1beta1Block[] blocks;
    public GoogleCloudVisionV1p1beta1Page withBlocks(GoogleCloudVisionV1p1beta1Block[] blocks) {
        this.blocks = blocks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public GoogleCloudVisionV1p1beta1Page withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public GoogleCloudVisionV1p1beta1Page withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public GoogleCloudVisionV1p1beta1TextAnnotationTextProperty property;
    public GoogleCloudVisionV1p1beta1Page withProperty(GoogleCloudVisionV1p1beta1TextAnnotationTextProperty property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public GoogleCloudVisionV1p1beta1Page withWidth(Integer width) {
        this.width = width;
        return this;
    }
}