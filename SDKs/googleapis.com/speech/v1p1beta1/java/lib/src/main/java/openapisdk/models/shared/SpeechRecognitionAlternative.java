package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpeechRecognitionAlternative
 * Alternative hypotheses (a.k.a. n-best list).
**/
public class SpeechRecognitionAlternative {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public SpeechRecognitionAlternative withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcript")
    public String transcript;
    public SpeechRecognitionAlternative withTranscript(String transcript) {
        this.transcript = transcript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("words")
    public WordInfo[] words;
    public SpeechRecognitionAlternative withWords(WordInfo[] words) {
        this.words = words;
        return this;
    }
}