package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioStream
 * Audio stream resource.
**/
public class AudioStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrateBps")
    public Integer bitrateBps;
    public AudioStream withBitrateBps(Integer bitrateBps) {
        this.bitrateBps = bitrateBps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCount")
    public Integer channelCount;
    public AudioStream withChannelCount(Integer channelCount) {
        this.channelCount = channelCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelLayout")
    public String[] channelLayout;
    public AudioStream withChannelLayout(String[] channelLayout) {
        this.channelLayout = channelLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codec")
    public String codec;
    public AudioStream withCodec(String codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapping")
    public AudioMapping[] mapping;
    public AudioStream withMapping(AudioMapping[] mapping) {
        this.mapping = mapping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleRateHertz")
    public Integer sampleRateHertz;
    public AudioStream withSampleRateHertz(Integer sampleRateHertz) {
        this.sampleRateHertz = sampleRateHertz;
        return this;
    }
}