package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioConfig
 * Description of audio data to be synthesized.
**/
public class AudioConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioEncoding")
    public AudioConfigAudioEncodingEnum audioEncoding;
    public AudioConfig withAudioEncoding(AudioConfigAudioEncodingEnum audioEncoding) {
        this.audioEncoding = audioEncoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectsProfileId")
    public String[] effectsProfileId;
    public AudioConfig withEffectsProfileId(String[] effectsProfileId) {
        this.effectsProfileId = effectsProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pitch")
    public Double pitch;
    public AudioConfig withPitch(Double pitch) {
        this.pitch = pitch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleRateHertz")
    public Integer sampleRateHertz;
    public AudioConfig withSampleRateHertz(Integer sampleRateHertz) {
        this.sampleRateHertz = sampleRateHertz;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speakingRate")
    public Double speakingRate;
    public AudioConfig withSpeakingRate(Double speakingRate) {
        this.speakingRate = speakingRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeGainDb")
    public Double volumeGainDb;
    public AudioConfig withVolumeGainDb(Double volumeGainDb) {
        this.volumeGainDb = volumeGainDb;
        return this;
    }
}