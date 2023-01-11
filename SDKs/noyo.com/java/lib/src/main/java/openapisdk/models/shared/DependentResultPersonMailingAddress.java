package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentResultPersonMailingAddress
 * Mailing address of the person
**/
public class DependentResultPersonMailingAddress {
    @JsonProperty("city")
    public String city;
    public DependentResultPersonMailingAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public DependentResultPersonMailingAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public DependentResultPersonMailingAddressStateEnum state;
    public DependentResultPersonMailingAddress withState(DependentResultPersonMailingAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public DependentResultPersonMailingAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public DependentResultPersonMailingAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public DependentResultPersonMailingAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}