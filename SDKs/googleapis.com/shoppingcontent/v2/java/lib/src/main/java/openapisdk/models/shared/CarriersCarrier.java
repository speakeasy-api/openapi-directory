package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CarriersCarrier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public CarriersCarrier withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eddServices")
    public String[] eddServices;
    public CarriersCarrier withEddServices(String[] eddServices) {
        this.eddServices = eddServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CarriersCarrier withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public String[] services;
    public CarriersCarrier withServices(String[] services) {
        this.services = services;
        return this;
    }
}