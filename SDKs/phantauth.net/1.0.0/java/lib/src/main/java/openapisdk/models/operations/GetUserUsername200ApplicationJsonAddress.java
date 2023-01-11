package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetUserUsername200ApplicationJsonAddress
 * The user's preferred postal address.
**/
public class GetUserUsername200ApplicationJsonAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public GetUserUsername200ApplicationJsonAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatted")
    public String formatted;
    public GetUserUsername200ApplicationJsonAddress withFormatted(String formatted) {
        this.formatted = formatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locality")
    public String locality;
    public GetUserUsername200ApplicationJsonAddress withLocality(String locality) {
        this.locality = locality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postal_code")
    public String postalCode;
    public GetUserUsername200ApplicationJsonAddress withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public GetUserUsername200ApplicationJsonAddress withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_address")
    public String streetAddress;
    public GetUserUsername200ApplicationJsonAddress withStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
        return this;
    }
}