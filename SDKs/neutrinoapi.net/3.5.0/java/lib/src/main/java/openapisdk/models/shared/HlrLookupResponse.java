package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HlrLookupResponse {
    @JsonProperty("country")
    public String country;
    public HlrLookupResponse withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("countryCode")
    public String countryCode;
    public HlrLookupResponse withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("countryCode3")
    public String countryCode3;
    public HlrLookupResponse withCountryCode3(String countryCode3) {
        this.countryCode3 = countryCode3;
        return this;
    }
    @JsonProperty("currencyCode")
    public String currencyCode;
    public HlrLookupResponse withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("currentNetwork")
    public String currentNetwork;
    public HlrLookupResponse withCurrentNetwork(String currentNetwork) {
        this.currentNetwork = currentNetwork;
        return this;
    }
    @JsonProperty("hlrStatus")
    public String hlrStatus;
    public HlrLookupResponse withHlrStatus(String hlrStatus) {
        this.hlrStatus = hlrStatus;
        return this;
    }
    @JsonProperty("hlrValid")
    public Boolean hlrValid;
    public HlrLookupResponse withHlrValid(Boolean hlrValid) {
        this.hlrValid = hlrValid;
        return this;
    }
    @JsonProperty("imsi")
    public String imsi;
    public HlrLookupResponse withImsi(String imsi) {
        this.imsi = imsi;
        return this;
    }
    @JsonProperty("internationalCallingCode")
    public Integer internationalCallingCode;
    public HlrLookupResponse withInternationalCallingCode(Integer internationalCallingCode) {
        this.internationalCallingCode = internationalCallingCode;
        return this;
    }
    @JsonProperty("internationalNumber")
    public String internationalNumber;
    public HlrLookupResponse withInternationalNumber(String internationalNumber) {
        this.internationalNumber = internationalNumber;
        return this;
    }
    @JsonProperty("isMobile")
    public Boolean isMobile;
    public HlrLookupResponse withIsMobile(Boolean isMobile) {
        this.isMobile = isMobile;
        return this;
    }
    @JsonProperty("isPorted")
    public Boolean isPorted;
    public HlrLookupResponse withIsPorted(Boolean isPorted) {
        this.isPorted = isPorted;
        return this;
    }
    @JsonProperty("isRoaming")
    public Boolean isRoaming;
    public HlrLookupResponse withIsRoaming(Boolean isRoaming) {
        this.isRoaming = isRoaming;
        return this;
    }
    @JsonProperty("localNumber")
    public String localNumber;
    public HlrLookupResponse withLocalNumber(String localNumber) {
        this.localNumber = localNumber;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public HlrLookupResponse withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("mcc")
    public String mcc;
    public HlrLookupResponse withMcc(String mcc) {
        this.mcc = mcc;
        return this;
    }
    @JsonProperty("mnc")
    public String mnc;
    public HlrLookupResponse withMnc(String mnc) {
        this.mnc = mnc;
        return this;
    }
    @JsonProperty("msc")
    public String msc;
    public HlrLookupResponse withMsc(String msc) {
        this.msc = msc;
        return this;
    }
    @JsonProperty("msin")
    public String msin;
    public HlrLookupResponse withMsin(String msin) {
        this.msin = msin;
        return this;
    }
    @JsonProperty("numberType")
    public String numberType;
    public HlrLookupResponse withNumberType(String numberType) {
        this.numberType = numberType;
        return this;
    }
    @JsonProperty("numberValid")
    public Boolean numberValid;
    public HlrLookupResponse withNumberValid(Boolean numberValid) {
        this.numberValid = numberValid;
        return this;
    }
    @JsonProperty("originNetwork")
    public String originNetwork;
    public HlrLookupResponse withOriginNetwork(String originNetwork) {
        this.originNetwork = originNetwork;
        return this;
    }
    @JsonProperty("portedNetwork")
    public String portedNetwork;
    public HlrLookupResponse withPortedNetwork(String portedNetwork) {
        this.portedNetwork = portedNetwork;
        return this;
    }
    @JsonProperty("roamingCountryCode")
    public String roamingCountryCode;
    public HlrLookupResponse withRoamingCountryCode(String roamingCountryCode) {
        this.roamingCountryCode = roamingCountryCode;
        return this;
    }
}