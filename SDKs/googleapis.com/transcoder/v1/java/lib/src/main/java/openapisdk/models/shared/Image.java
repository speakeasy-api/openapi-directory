package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Image
 * Overlaid jpeg image.
**/
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alpha")
    public Double alpha;
    public Image withAlpha(Double alpha) {
        this.alpha = alpha;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public NormalizedCoordinate resolution;
    public Image withResolution(NormalizedCoordinate resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Image withUri(String uri) {
        this.uri = uri;
        return this;
    }
}