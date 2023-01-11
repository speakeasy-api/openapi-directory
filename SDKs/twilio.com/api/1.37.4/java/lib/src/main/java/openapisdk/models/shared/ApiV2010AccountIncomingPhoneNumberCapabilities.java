package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiV2010AccountIncomingPhoneNumberCapabilities
 * Indicate if a phone can receive calls or messages
**/
public class ApiV2010AccountIncomingPhoneNumberCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public Boolean fax;
    public ApiV2010AccountIncomingPhoneNumberCapabilities withFax(Boolean fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mms")
    public Boolean mms;
    public ApiV2010AccountIncomingPhoneNumberCapabilities withMms(Boolean mms) {
        this.mms = mms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms")
    public Boolean sms;
    public ApiV2010AccountIncomingPhoneNumberCapabilities withSms(Boolean sms) {
        this.sms = sms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice")
    public Boolean voice;
    public ApiV2010AccountIncomingPhoneNumberCapabilities withVoice(Boolean voice) {
        this.voice = voice;
        return this;
    }
}