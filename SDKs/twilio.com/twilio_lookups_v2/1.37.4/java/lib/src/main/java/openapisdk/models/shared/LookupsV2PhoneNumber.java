package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LookupsV2PhoneNumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_forwarding")
    public Object callForwarding;
    public LookupsV2PhoneNumber withCallForwarding(Object callForwarding) {
        this.callForwarding = callForwarding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_name")
    public Object callerName;
    public LookupsV2PhoneNumber withCallerName(Object callerName) {
        this.callerName = callerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calling_country_code")
    public String callingCountryCode;
    public LookupsV2PhoneNumber withCallingCountryCode(String callingCountryCode) {
        this.callingCountryCode = callingCountryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_code")
    public String countryCode;
    public LookupsV2PhoneNumber withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity_match")
    public Object identityMatch;
    public LookupsV2PhoneNumber withIdentityMatch(Object identityMatch) {
        this.identityMatch = identityMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_type_intelligence")
    public Object lineTypeIntelligence;
    public LookupsV2PhoneNumber withLineTypeIntelligence(Object lineTypeIntelligence) {
        this.lineTypeIntelligence = lineTypeIntelligence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("live_activity")
    public Object liveActivity;
    public LookupsV2PhoneNumber withLiveActivity(Object liveActivity) {
        this.liveActivity = liveActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("national_format")
    public String nationalFormat;
    public LookupsV2PhoneNumber withNationalFormat(String nationalFormat) {
        this.nationalFormat = nationalFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public LookupsV2PhoneNumber withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sim_swap")
    public Object simSwap;
    public LookupsV2PhoneNumber withSimSwap(Object simSwap) {
        this.simSwap = simSwap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public LookupsV2PhoneNumber withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valid")
    public Boolean valid;
    public LookupsV2PhoneNumber withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validation_errors")
    public PhoneNumberEnumValidationErrorEnum[] validationErrors;
    public LookupsV2PhoneNumber withValidationErrors(PhoneNumberEnumValidationErrorEnum[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}