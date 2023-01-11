package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddressInput
 * A person's physical address. May be a P.O. box or street address. All fields are optional.
**/
public class AddressInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public AddressInput withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public AddressInput withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public AddressInput withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendedAddress")
    public String extendedAddress;
    public AddressInput withExtendedAddress(String extendedAddress) {
        this.extendedAddress = extendedAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedValue")
    public String formattedValue;
    public AddressInput withFormattedValue(String formattedValue) {
        this.formattedValue = formattedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadataInput metadata;
    public AddressInput withMetadata(FieldMetadataInput metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poBox")
    public String poBox;
    public AddressInput withPoBox(String poBox) {
        this.poBox = poBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public AddressInput withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public AddressInput withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streetAddress")
    public String streetAddress;
    public AddressInput withStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AddressInput withType(String type) {
        this.type = type;
        return this;
    }
}