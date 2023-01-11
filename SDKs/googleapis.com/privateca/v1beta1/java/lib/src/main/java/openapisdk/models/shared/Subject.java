package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Subject
 * Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.
**/
public class Subject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public Subject withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locality")
    public String locality;
    public Subject withLocality(String locality) {
        this.locality = locality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public Subject withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationalUnit")
    public String organizationalUnit;
    public Subject withOrganizationalUnit(String organizationalUnit) {
        this.organizationalUnit = organizationalUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public Subject withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("province")
    public String province;
    public Subject withProvince(String province) {
        this.province = province;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streetAddress")
    public String streetAddress;
    public Subject withStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
        return this;
    }
}