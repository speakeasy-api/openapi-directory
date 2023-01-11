package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountTaxTaxRule
 * Tax calculation rule to apply in a state or province (USA only).
**/
public class AccountTaxTaxRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public AccountTaxTaxRule withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public AccountTaxTaxRule withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePercent")
    public String ratePercent;
    public AccountTaxTaxRule withRatePercent(String ratePercent) {
        this.ratePercent = ratePercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingTaxed")
    public Boolean shippingTaxed;
    public AccountTaxTaxRule withShippingTaxed(Boolean shippingTaxed) {
        this.shippingTaxed = shippingTaxed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useGlobalRate")
    public Boolean useGlobalRate;
    public AccountTaxTaxRule withUseGlobalRate(Boolean useGlobalRate) {
        this.useGlobalRate = useGlobalRate;
        return this;
    }
}