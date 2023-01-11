package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeResultPersonMailingAddress
 * Mailing address of the person
**/
public class EmployeeResultPersonMailingAddress {
    @JsonProperty("city")
    public String city;
    public EmployeeResultPersonMailingAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public EmployeeResultPersonMailingAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public EmployeeResultPersonMailingAddressStateEnum state;
    public EmployeeResultPersonMailingAddress withState(EmployeeResultPersonMailingAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public EmployeeResultPersonMailingAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public EmployeeResultPersonMailingAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public EmployeeResultPersonMailingAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}