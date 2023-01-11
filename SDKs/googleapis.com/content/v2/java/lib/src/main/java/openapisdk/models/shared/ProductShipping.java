package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductShipping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public ProductShipping withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationGroupName")
    public String locationGroupName;
    public ProductShipping withLocationGroupName(String locationGroupName) {
        this.locationGroupName = locationGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ProductShipping withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public ProductShipping withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Price price;
    public ProductShipping withPrice(Price price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public ProductShipping withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public ProductShipping withService(String service) {
        this.service = service;
        return this;
    }
}