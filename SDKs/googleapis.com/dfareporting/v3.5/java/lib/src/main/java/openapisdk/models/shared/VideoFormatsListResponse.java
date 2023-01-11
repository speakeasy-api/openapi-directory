package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoFormatsListResponse
 * Video Format List Response
**/
public class VideoFormatsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public VideoFormatsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoFormats")
    public VideoFormat[] videoFormats;
    public VideoFormatsListResponse withVideoFormats(VideoFormat[] videoFormats) {
        this.videoFormats = videoFormats;
        return this;
    }
}