package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEmployeeAddress
 * The employees' address
**/
public class EmployeeEmployeeAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address1")
    public String address1;
    public EmployeeEmployeeAddress withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address2")
    public String address2;
    public EmployeeEmployeeAddress withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address3")
    public String address3;
    public EmployeeEmployeeAddress withAddress3(String address3) {
        this.address3 = address3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address4")
    public String address4;
    public EmployeeEmployeeAddress withAddress4(String address4) {
        this.address4 = address4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public EmployeeEmployeeAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Postcode")
    public String postcode;
    public EmployeeEmployeeAddress withPostcode(String postcode) {
        this.postcode = postcode;
        return this;
    }
}