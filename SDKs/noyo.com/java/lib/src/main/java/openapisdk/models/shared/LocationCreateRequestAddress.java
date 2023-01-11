package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationCreateRequestAddress
 * Address of the group location
**/
public class LocationCreateRequestAddress {
    @JsonProperty("city")
    public String city;
    public LocationCreateRequestAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public LocationCreateRequestAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public LocationCreateRequestAddressStateEnum state;
    public LocationCreateRequestAddress withState(LocationCreateRequestAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public LocationCreateRequestAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public LocationCreateRequestAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public LocationCreateRequestAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}