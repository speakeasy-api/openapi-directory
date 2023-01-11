package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;
    public TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountryCode")
    public String countryCode;
    public TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("District")
    public String district;
    public TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts withDistrict(String district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("House")
    public String house;
    public TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts withHouse(String house) {
        this.house = house;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalCode")
    public String postalCode;
    public TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Street")
    public String street;
    public TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts withStreet(String street) {
        this.street = street;
        return this;
    }
}