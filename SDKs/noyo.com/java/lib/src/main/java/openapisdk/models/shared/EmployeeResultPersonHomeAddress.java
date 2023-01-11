package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeResultPersonHomeAddress
 * Home address of the person
**/
public class EmployeeResultPersonHomeAddress {
    @JsonProperty("city")
    public String city;
    public EmployeeResultPersonHomeAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public EmployeeResultPersonHomeAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public EmployeeResultPersonHomeAddressStateEnum state;
    public EmployeeResultPersonHomeAddress withState(EmployeeResultPersonHomeAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public EmployeeResultPersonHomeAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public EmployeeResultPersonHomeAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public EmployeeResultPersonHomeAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}