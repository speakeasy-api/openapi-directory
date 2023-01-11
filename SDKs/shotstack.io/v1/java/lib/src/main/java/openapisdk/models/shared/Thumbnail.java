package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Thumbnail
 * Generate a thumbnail image for the video or image at a specific point from the timeline.
**/
public class Thumbnail {
    @JsonProperty("capture")
    public Double capture;
    public Thumbnail withCapture(Double capture) {
        this.capture = capture;
        return this;
    }
    @JsonProperty("scale")
    public Double scale;
    public Thumbnail withScale(Double scale) {
        this.scale = scale;
        return this;
    }
}