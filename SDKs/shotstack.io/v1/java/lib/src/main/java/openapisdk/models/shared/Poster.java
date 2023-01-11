package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Poster
 * Generate a poster image for the video at a specific point from the timeline. The poster image size will match the size of the output video.
**/
public class Poster {
    @JsonProperty("capture")
    public Double capture;
    public Poster withCapture(Double capture) {
        this.capture = capture;
        return this;
    }
}