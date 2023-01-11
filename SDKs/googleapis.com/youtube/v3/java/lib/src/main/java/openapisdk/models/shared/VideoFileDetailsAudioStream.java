package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoFileDetailsAudioStream
 * Information about an audio stream.
**/
public class VideoFileDetailsAudioStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrateBps")
    public String bitrateBps;
    public VideoFileDetailsAudioStream withBitrateBps(String bitrateBps) {
        this.bitrateBps = bitrateBps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCount")
    public Long channelCount;
    public VideoFileDetailsAudioStream withChannelCount(Long channelCount) {
        this.channelCount = channelCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codec")
    public String codec;
    public VideoFileDetailsAudioStream withCodec(String codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor")
    public String vendor;
    public VideoFileDetailsAudioStream withVendor(String vendor) {
        this.vendor = vendor;
        return this;
    }
}