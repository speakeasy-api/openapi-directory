package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PhoneValidateResponse {
    @JsonProperty("country")
    public String country;
    public PhoneValidateResponse withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("countryCode")
    public String countryCode;
    public PhoneValidateResponse withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("countryCode3")
    public String countryCode3;
    public PhoneValidateResponse withCountryCode3(String countryCode3) {
        this.countryCode3 = countryCode3;
        return this;
    }
    @JsonProperty("currencyCode")
    public String currencyCode;
    public PhoneValidateResponse withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("internationalCallingCode")
    public Integer internationalCallingCode;
    public PhoneValidateResponse withInternationalCallingCode(Integer internationalCallingCode) {
        this.internationalCallingCode = internationalCallingCode;
        return this;
    }
    @JsonProperty("internationalNumber")
    public String internationalNumber;
    public PhoneValidateResponse withInternationalNumber(String internationalNumber) {
        this.internationalNumber = internationalNumber;
        return this;
    }
    @JsonProperty("isMobile")
    public Boolean isMobile;
    public PhoneValidateResponse withIsMobile(Boolean isMobile) {
        this.isMobile = isMobile;
        return this;
    }
    @JsonProperty("localNumber")
    public String localNumber;
    public PhoneValidateResponse withLocalNumber(String localNumber) {
        this.localNumber = localNumber;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public PhoneValidateResponse withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("prefixNetwork")
    public String prefixNetwork;
    public PhoneValidateResponse withPrefixNetwork(String prefixNetwork) {
        this.prefixNetwork = prefixNetwork;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PhoneValidateResponse withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("valid")
    public Boolean valid;
    public PhoneValidateResponse withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}