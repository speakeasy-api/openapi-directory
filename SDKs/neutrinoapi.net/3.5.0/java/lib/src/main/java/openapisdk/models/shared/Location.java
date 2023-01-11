package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Location {
    @JsonProperty("address")
    public String address;
    public Location withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonProperty("addressComponents")
    public java.util.Map<String, String> addressComponents;
    public Location withAddressComponents(java.util.Map<String, String> addressComponents) {
        this.addressComponents = addressComponents;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public Location withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public Location withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("countryCode")
    public String countryCode;
    public Location withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("countryCode3")
    public String countryCode3;
    public Location withCountryCode3(String countryCode3) {
        this.countryCode3 = countryCode3;
        return this;
    }
    @JsonProperty("currencyCode")
    public String currencyCode;
    public Location withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public Location withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("locationTags")
    public String[] locationTags;
    public Location withLocationTags(String[] locationTags) {
        this.locationTags = locationTags;
        return this;
    }
    @JsonProperty("locationType")
    public String locationType;
    public Location withLocationType(String locationType) {
        this.locationType = locationType;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public Location withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("postalCode")
    public String postalCode;
    public Location withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public Location withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("timezone")
    public java.util.Map<String, Timezone> timezone;
    public Location withTimezone(java.util.Map<String, Timezone> timezone) {
        this.timezone = timezone;
        return this;
    }
}