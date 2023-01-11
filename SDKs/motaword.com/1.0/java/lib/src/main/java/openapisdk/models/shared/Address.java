package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Address {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public Address withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public Address withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public Address withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public Address withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street")
    public String street;
    public Address withStreet(String street) {
        this.street = street;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public Address withZip(String zip) {
        this.zip = zip;
        return this;
    }
}