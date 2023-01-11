package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewHostedNumbersHostedNumberOrderCapabilities
 * A mapping of phone number capabilities.
**/
public class PreviewHostedNumbersHostedNumberOrderCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public Boolean fax;
    public PreviewHostedNumbersHostedNumberOrderCapabilities withFax(Boolean fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mms")
    public Boolean mms;
    public PreviewHostedNumbersHostedNumberOrderCapabilities withMms(Boolean mms) {
        this.mms = mms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms")
    public Boolean sms;
    public PreviewHostedNumbersHostedNumberOrderCapabilities withSms(Boolean sms) {
        this.sms = sms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice")
    public Boolean voice;
    public PreviewHostedNumbersHostedNumberOrderCapabilities withVoice(Boolean voice) {
        this.voice = voice;
        return this;
    }
}