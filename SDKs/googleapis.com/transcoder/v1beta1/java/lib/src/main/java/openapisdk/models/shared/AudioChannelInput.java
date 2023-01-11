package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioChannelInput
 * Identifies which input file, track, and channel should be used.
**/
public class AudioChannelInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public Integer channel;
    public AudioChannelInput withChannel(Integer channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gainDb")
    public Double gainDb;
    public AudioChannelInput withGainDb(Double gainDb) {
        this.gainDb = gainDb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public AudioChannelInput withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track")
    public Integer track;
    public AudioChannelInput withTrack(Integer track) {
        this.track = track;
        return this;
    }
}