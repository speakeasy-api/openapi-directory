package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganizationInfo
 * Additional Info stored for an organization.
**/
public class OrganizationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public OrganizationInfo withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalAddress")
    public PostalAddress postalAddress;
    public OrganizationInfo withPostalAddress(PostalAddress postalAddress) {
        this.postalAddress = postalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registeredDomain")
    public String registeredDomain;
    public OrganizationInfo withRegisteredDomain(String registeredDomain) {
        this.registeredDomain = registeredDomain;
        return this;
    }
}