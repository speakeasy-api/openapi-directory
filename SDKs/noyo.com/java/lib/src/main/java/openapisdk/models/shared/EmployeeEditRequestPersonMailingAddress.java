package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEditRequestPersonMailingAddress
 * Mailing address for the person
**/
public class EmployeeEditRequestPersonMailingAddress {
    @JsonProperty("city")
    public String city;
    public EmployeeEditRequestPersonMailingAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public EmployeeEditRequestPersonMailingAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public EmployeeEditRequestPersonMailingAddressStateEnum state;
    public EmployeeEditRequestPersonMailingAddress withState(EmployeeEditRequestPersonMailingAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public EmployeeEditRequestPersonMailingAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public EmployeeEditRequestPersonMailingAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public EmployeeEditRequestPersonMailingAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}