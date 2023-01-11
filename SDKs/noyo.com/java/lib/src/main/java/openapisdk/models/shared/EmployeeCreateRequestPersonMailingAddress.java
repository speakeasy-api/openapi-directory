package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeCreateRequestPersonMailingAddress
 * Mailing address of the person
**/
public class EmployeeCreateRequestPersonMailingAddress {
    @JsonProperty("city")
    public String city;
    public EmployeeCreateRequestPersonMailingAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public EmployeeCreateRequestPersonMailingAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public EmployeeCreateRequestPersonMailingAddressStateEnum state;
    public EmployeeCreateRequestPersonMailingAddress withState(EmployeeCreateRequestPersonMailingAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public EmployeeCreateRequestPersonMailingAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public EmployeeCreateRequestPersonMailingAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public EmployeeCreateRequestPersonMailingAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}