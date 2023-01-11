package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SupportedCountry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencies")
    public String[] currencies;
    public SupportedCountry withCurrencies(String[] currencies) {
        this.currencies = currencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isoCountryCode")
    public String isoCountryCode;
    public SupportedCountry withIsoCountryCode(String isoCountryCode) {
        this.isoCountryCode = isoCountryCode;
        return this;
    }
}