package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TripsTripDetails200ApplicationJsonResultTrackAddressStartParts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;
    public TripsTripDetails200ApplicationJsonResultTrackAddressStartParts withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountryCode")
    public String countryCode;
    public TripsTripDetails200ApplicationJsonResultTrackAddressStartParts withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("District")
    public String district;
    public TripsTripDetails200ApplicationJsonResultTrackAddressStartParts withDistrict(String district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("House")
    public String house;
    public TripsTripDetails200ApplicationJsonResultTrackAddressStartParts withHouse(String house) {
        this.house = house;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalCode")
    public String postalCode;
    public TripsTripDetails200ApplicationJsonResultTrackAddressStartParts withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Street")
    public String street;
    public TripsTripDetails200ApplicationJsonResultTrackAddressStartParts withStreet(String street) {
        this.street = street;
        return this;
    }
}