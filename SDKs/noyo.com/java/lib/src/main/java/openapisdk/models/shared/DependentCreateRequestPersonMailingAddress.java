package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentCreateRequestPersonMailingAddress
 * Mailing address of the person
**/
public class DependentCreateRequestPersonMailingAddress {
    @JsonProperty("city")
    public String city;
    public DependentCreateRequestPersonMailingAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public DependentCreateRequestPersonMailingAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public DependentCreateRequestPersonMailingAddressStateEnum state;
    public DependentCreateRequestPersonMailingAddress withState(DependentCreateRequestPersonMailingAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public DependentCreateRequestPersonMailingAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public DependentCreateRequestPersonMailingAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public DependentCreateRequestPersonMailingAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}