package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecognizeResponse
 * The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.
**/
public class RecognizeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public RecognizeResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public SpeechRecognitionResult[] results;
    public RecognizeResponse withResults(SpeechRecognitionResult[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speechAdaptationInfo")
    public SpeechAdaptationInfo speechAdaptationInfo;
    public RecognizeResponse withSpeechAdaptationInfo(SpeechAdaptationInfo speechAdaptationInfo) {
        this.speechAdaptationInfo = speechAdaptationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalBilledTime")
    public String totalBilledTime;
    public RecognizeResponse withTotalBilledTime(String totalBilledTime) {
        this.totalBilledTime = totalBilledTime;
        return this;
    }
}