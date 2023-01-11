package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganizationInfo
 * Additional information stored for an organization.
**/
public class OrganizationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PostalAddress address;
    public OrganizationInfo withAddress(PostalAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public OrganizationInfo withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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