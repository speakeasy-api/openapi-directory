package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public OrderAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullAddress")
    public String[] fullAddress;
    public OrderAddress withFullAddress(String[] fullAddress) {
        this.fullAddress = fullAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPostOfficeBox")
    public Boolean isPostOfficeBox;
    public OrderAddress withIsPostOfficeBox(Boolean isPostOfficeBox) {
        this.isPostOfficeBox = isPostOfficeBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locality")
    public String locality;
    public OrderAddress withLocality(String locality) {
        this.locality = locality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public OrderAddress withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipientName")
    public String recipientName;
    public OrderAddress withRecipientName(String recipientName) {
        this.recipientName = recipientName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public OrderAddress withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streetAddress")
    public String[] streetAddress;
    public OrderAddress withStreetAddress(String[] streetAddress) {
        this.streetAddress = streetAddress;
        return this;
    }
}