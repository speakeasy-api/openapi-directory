package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoContent
 * Video content for a creative.
**/
public class VideoContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoMetadata")
    public VideoMetadata videoMetadata;
    public VideoContent withVideoMetadata(VideoMetadata videoMetadata) {
        this.videoMetadata = videoMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoUrl")
    public String videoUrl;
    public VideoContent withVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoVastXml")
    public String videoVastXml;
    public VideoContent withVideoVastXml(String videoVastXml) {
        this.videoVastXml = videoVastXml;
        return this;
    }
}