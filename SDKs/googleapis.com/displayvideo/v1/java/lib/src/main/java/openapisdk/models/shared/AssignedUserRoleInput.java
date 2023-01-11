package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignedUserRoleInput
 * A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.
**/
public class AssignedUserRoleInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public AssignedUserRoleInput withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public AssignedUserRoleInput withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRole")
    public AssignedUserRoleUserRoleEnum userRole;
    public AssignedUserRoleInput withUserRole(AssignedUserRoleUserRoleEnum userRole) {
        this.userRole = userRole;
        return this;
    }
}