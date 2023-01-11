package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VoiceV1DialingPermissionsDialingPermissionsCountry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continent")
    public String continent;
    public VoiceV1DialingPermissionsDialingPermissionsCountry withContinent(String continent) {
        this.continent = continent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_codes")
    public String[] countryCodes;
    public VoiceV1DialingPermissionsDialingPermissionsCountry withCountryCodes(String[] countryCodes) {
        this.countryCodes = countryCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("high_risk_special_numbers_enabled")
    public Boolean highRiskSpecialNumbersEnabled;
    public VoiceV1DialingPermissionsDialingPermissionsCountry withHighRiskSpecialNumbersEnabled(Boolean highRiskSpecialNumbersEnabled) {
        this.highRiskSpecialNumbersEnabled = highRiskSpecialNumbersEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("high_risk_tollfraud_numbers_enabled")
    public Boolean highRiskTollfraudNumbersEnabled;
    public VoiceV1DialingPermissionsDialingPermissionsCountry withHighRiskTollfraudNumbersEnabled(Boolean highRiskTollfraudNumbersEnabled) {
        this.highRiskTollfraudNumbersEnabled = highRiskTollfraudNumbersEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_code")
    public String isoCode;
    public VoiceV1DialingPermissionsDialingPermissionsCountry withIsoCode(String isoCode) {
        this.isoCode = isoCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public VoiceV1DialingPermissionsDialingPermissionsCountry withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("low_risk_numbers_enabled")
    public Boolean lowRiskNumbersEnabled;
    public VoiceV1DialingPermissionsDialingPermissionsCountry withLowRiskNumbersEnabled(Boolean lowRiskNumbersEnabled) {
        this.lowRiskNumbersEnabled = lowRiskNumbersEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VoiceV1DialingPermissionsDialingPermissionsCountry withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VoiceV1DialingPermissionsDialingPermissionsCountry withUrl(String url) {
        this.url = url;
        return this;
    }
}