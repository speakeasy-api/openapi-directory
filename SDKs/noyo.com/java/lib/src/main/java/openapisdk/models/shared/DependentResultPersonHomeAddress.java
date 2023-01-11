package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentResultPersonHomeAddress
 * Home address of the person
**/
public class DependentResultPersonHomeAddress {
    @JsonProperty("city")
    public String city;
    public DependentResultPersonHomeAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public DependentResultPersonHomeAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public DependentResultPersonHomeAddressStateEnum state;
    public DependentResultPersonHomeAddress withState(DependentResultPersonHomeAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public DependentResultPersonHomeAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public DependentResultPersonHomeAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public DependentResultPersonHomeAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}