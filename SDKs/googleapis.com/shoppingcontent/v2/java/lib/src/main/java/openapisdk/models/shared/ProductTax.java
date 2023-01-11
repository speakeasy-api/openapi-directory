package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductTax {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public ProductTax withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ProductTax withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public ProductTax withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;
    public ProductTax withRate(Double rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public ProductTax withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxShip")
    public Boolean taxShip;
    public ProductTax withTaxShip(Boolean taxShip) {
        this.taxShip = taxShip;
        return this;
    }
}