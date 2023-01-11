package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationEditRequestAddress
 * Address of the group location
**/
public class LocationEditRequestAddress {
    @JsonProperty("city")
    public String city;
    public LocationEditRequestAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public LocationEditRequestAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public LocationEditRequestAddressStateEnum state;
    public LocationEditRequestAddress withState(LocationEditRequestAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public LocationEditRequestAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public LocationEditRequestAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public LocationEditRequestAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}