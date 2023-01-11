package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtraMaterial
 * Supplementary material to the feedback.
**/
public class ExtraMaterial {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public TextLink link;
    public ExtraMaterial withLink(TextLink link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video")
    public VideoLink video;
    public ExtraMaterial withVideo(VideoLink video) {
        this.video = video;
        return this;
    }
}