package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobileCapabilities
 * Whether a phone number can receive calls or messages
**/
public class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobileCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public Boolean fax;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobileCapabilities withFax(Boolean fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mms")
    public Boolean mms;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobileCapabilities withMms(Boolean mms) {
        this.mms = mms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms")
    public Boolean sms;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobileCapabilities withSms(Boolean sms) {
        this.sms = sms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice")
    public Boolean voice;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobileCapabilities withVoice(Boolean voice) {
        this.voice = voice;
        return this;
    }
}