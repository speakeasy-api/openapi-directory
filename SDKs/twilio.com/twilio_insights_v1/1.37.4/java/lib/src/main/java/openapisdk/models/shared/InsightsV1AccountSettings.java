package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InsightsV1AccountSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public InsightsV1AccountSettings withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advanced_features")
    public Boolean advancedFeatures;
    public InsightsV1AccountSettings withAdvancedFeatures(Boolean advancedFeatures) {
        this.advancedFeatures = advancedFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public InsightsV1AccountSettings withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_trace")
    public Boolean voiceTrace;
    public InsightsV1AccountSettings withVoiceTrace(Boolean voiceTrace) {
        this.voiceTrace = voiceTrace;
        return this;
    }
}