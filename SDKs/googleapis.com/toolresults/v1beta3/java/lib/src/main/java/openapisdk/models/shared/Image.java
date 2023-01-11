package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Image
 * An image, with a link to the main image and a thumbnail.
**/
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public Image withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceImage")
    public ToolOutputReference sourceImage;
    public Image withSourceImage(ToolOutputReference sourceImage) {
        this.sourceImage = sourceImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepId")
    public String stepId;
    public Image withStepId(String stepId) {
        this.stepId = stepId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public Thumbnail thumbnail;
    public Image withThumbnail(Thumbnail thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
}