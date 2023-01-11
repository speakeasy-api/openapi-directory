package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Video
 * Data representing a video.
**/
public class Video {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public MediaProperties properties;
    public Video withProperties(MediaProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtubeUri")
    public String youtubeUri;
    public Video withYoutubeUri(String youtubeUri) {
        this.youtubeUri = youtubeUri;
        return this;
    }
}