package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LookupsV1PhoneNumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_ons")
    public Object addOns;
    public LookupsV1PhoneNumber withAddOns(Object addOns) {
        this.addOns = addOns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_name")
    public Object callerName;
    public LookupsV1PhoneNumber withCallerName(Object callerName) {
        this.callerName = callerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public Object carrier;
    public LookupsV1PhoneNumber withCarrier(Object carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_code")
    public String countryCode;
    public LookupsV1PhoneNumber withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("national_format")
    public String nationalFormat;
    public LookupsV1PhoneNumber withNationalFormat(String nationalFormat) {
        this.nationalFormat = nationalFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public LookupsV1PhoneNumber withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public LookupsV1PhoneNumber withUrl(String url) {
        this.url = url;
        return this;
    }
}