package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpeechAdaptationInfo
 * Information on speech adaptation use in results
**/
public class SpeechAdaptationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adaptationTimeout")
    public Boolean adaptationTimeout;
    public SpeechAdaptationInfo withAdaptationTimeout(Boolean adaptationTimeout) {
        this.adaptationTimeout = adaptationTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutMessage")
    public String timeoutMessage;
    public SpeechAdaptationInfo withTimeoutMessage(String timeoutMessage) {
        this.timeoutMessage = timeoutMessage;
        return this;
    }
}