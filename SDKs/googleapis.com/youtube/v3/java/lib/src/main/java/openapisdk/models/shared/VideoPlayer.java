package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoPlayer
 * Player to be used for a video playback.
**/
public class VideoPlayer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embedHeight")
    public String embedHeight;
    public VideoPlayer withEmbedHeight(String embedHeight) {
        this.embedHeight = embedHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embedHtml")
    public String embedHtml;
    public VideoPlayer withEmbedHtml(String embedHtml) {
        this.embedHtml = embedHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embedWidth")
    public String embedWidth;
    public VideoPlayer withEmbedWidth(String embedWidth) {
        this.embedWidth = embedWidth;
        return this;
    }
}