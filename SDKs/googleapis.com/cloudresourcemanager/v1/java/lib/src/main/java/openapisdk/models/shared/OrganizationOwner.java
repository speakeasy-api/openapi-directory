package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganizationOwner
 * The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted.
**/
public class OrganizationOwner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directoryCustomerId")
    public String directoryCustomerId;
    public OrganizationOwner withDirectoryCustomerId(String directoryCustomerId) {
        this.directoryCustomerId = directoryCustomerId;
        return this;
    }
}