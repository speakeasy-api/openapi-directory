package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Address
 * JSON template for address of a customer.
**/
public class Address {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine1")
    public String addressLine1;
    public Address withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine2")
    public String addressLine2;
    public Address withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine3")
    public String addressLine3;
    public Address withAddressLine3(String addressLine3) {
        this.addressLine3 = addressLine3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactName")
    public String contactName;
    public Address withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public Address withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Address withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locality")
    public String locality;
    public Address withLocality(String locality) {
        this.locality = locality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationName")
    public String organizationName;
    public Address withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public Address withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public Address withRegion(String region) {
        this.region = region;
        return this;
    }
}