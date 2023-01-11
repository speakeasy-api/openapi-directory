package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachineCapabilities
 * Whether a phone number can receive calls or messages
**/
public class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachineCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public Boolean fax;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachineCapabilities withFax(Boolean fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mms")
    public Boolean mms;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachineCapabilities withMms(Boolean mms) {
        this.mms = mms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms")
    public Boolean sms;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachineCapabilities withSms(Boolean sms) {
        this.sms = sms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice")
    public Boolean voice;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachineCapabilities withVoice(Boolean voice) {
        this.voice = voice;
        return this;
    }
}