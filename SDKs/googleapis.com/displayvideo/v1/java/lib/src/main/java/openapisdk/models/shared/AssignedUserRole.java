package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignedUserRole
 * A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.
**/
public class AssignedUserRole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public AssignedUserRole withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedUserRoleId")
    public String assignedUserRoleId;
    public AssignedUserRole withAssignedUserRoleId(String assignedUserRoleId) {
        this.assignedUserRoleId = assignedUserRoleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public AssignedUserRole withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRole")
    public AssignedUserRoleUserRoleEnum userRole;
    public AssignedUserRole withUserRole(AssignedUserRoleUserRoleEnum userRole) {
        this.userRole = userRole;
        return this;
    }
}