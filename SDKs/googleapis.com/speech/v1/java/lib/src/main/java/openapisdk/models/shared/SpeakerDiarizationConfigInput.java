package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpeakerDiarizationConfigInput
 * Config to enable speaker diarization.
**/
public class SpeakerDiarizationConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSpeakerDiarization")
    public Boolean enableSpeakerDiarization;
    public SpeakerDiarizationConfigInput withEnableSpeakerDiarization(Boolean enableSpeakerDiarization) {
        this.enableSpeakerDiarization = enableSpeakerDiarization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSpeakerCount")
    public Integer maxSpeakerCount;
    public SpeakerDiarizationConfigInput withMaxSpeakerCount(Integer maxSpeakerCount) {
        this.maxSpeakerCount = maxSpeakerCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minSpeakerCount")
    public Integer minSpeakerCount;
    public SpeakerDiarizationConfigInput withMinSpeakerCount(Integer minSpeakerCount) {
        this.minSpeakerCount = minSpeakerCount;
        return this;
    }
}