package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpeechRecognitionResult
 * A speech recognition result corresponding to a portion of the audio.
**/
public class SpeechRecognitionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternatives")
    public SpeechRecognitionAlternative[] alternatives;
    public SpeechRecognitionResult withAlternatives(SpeechRecognitionAlternative[] alternatives) {
        this.alternatives = alternatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelTag")
    public Integer channelTag;
    public SpeechRecognitionResult withChannelTag(Integer channelTag) {
        this.channelTag = channelTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public SpeechRecognitionResult withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultEndTime")
    public String resultEndTime;
    public SpeechRecognitionResult withResultEndTime(String resultEndTime) {
        this.resultEndTime = resultEndTime;
        return this;
    }
}