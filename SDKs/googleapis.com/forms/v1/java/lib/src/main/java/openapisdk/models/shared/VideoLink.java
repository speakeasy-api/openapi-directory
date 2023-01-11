package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoLink
 * Link to a video.
**/
public class VideoLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayText")
    public String displayText;
    public VideoLink withDisplayText(String displayText) {
        this.displayText = displayText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtubeUri")
    public String youtubeUri;
    public VideoLink withYoutubeUri(String youtubeUri) {
        this.youtubeUri = youtubeUri;
        return this;
    }
}