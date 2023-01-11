package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SupportedCountryV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencies")
    public String[] currencies;
    public SupportedCountryV2 withCurrencies(String[] currencies) {
        this.currencies = currencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isoCountryCode")
    public String isoCountryCode;
    public SupportedCountryV2 withIsoCountryCode(String isoCountryCode) {
        this.isoCountryCode = isoCountryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public RegionV2[] regions;
    public SupportedCountryV2 withRegions(RegionV2[] regions) {
        this.regions = regions;
        return this;
    }
}