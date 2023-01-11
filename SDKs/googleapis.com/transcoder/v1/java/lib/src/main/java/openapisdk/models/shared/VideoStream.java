package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoStream
 * Video stream resource.
**/
public class VideoStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("h264")
    public H264CodecSettings h264;
    public VideoStream withH264(H264CodecSettings h264) {
        this.h264 = h264;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("h265")
    public H265CodecSettings h265;
    public VideoStream withH265(H265CodecSettings h265) {
        this.h265 = h265;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vp9")
    public Vp9CodecSettings vp9;
    public VideoStream withVp9(Vp9CodecSettings vp9) {
        this.vp9 = vp9;
        return this;
    }
}