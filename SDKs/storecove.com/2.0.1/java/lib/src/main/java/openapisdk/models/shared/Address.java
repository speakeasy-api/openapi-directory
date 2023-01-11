package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Address
 * The address
**/
public class Address {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public Address withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public CountryEnum country;
    public Address withCountry(CountryEnum country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public Address withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street1")
    public String street1;
    public Address withStreet1(String street1) {
        this.street1 = street1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street2")
    public String street2;
    public Address withStreet2(String street2) {
        this.street2 = street2;
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