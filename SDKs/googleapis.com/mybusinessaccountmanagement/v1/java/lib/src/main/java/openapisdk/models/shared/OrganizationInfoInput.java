package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganizationInfoInput
 * Additional information stored for an organization.
**/
public class OrganizationInfoInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PostalAddress address;
    public OrganizationInfoInput withAddress(PostalAddress address) {
        this.address = address;
        return this;
    }
}