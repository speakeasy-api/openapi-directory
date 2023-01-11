package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyMembershipRolesRequest
 * The request message for MembershipsService.ModifyMembershipRoles.
**/
public class ModifyMembershipRolesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addRoles")
    public MembershipRole1[] addRoles;
    public ModifyMembershipRolesRequest withAddRoles(MembershipRole1[] addRoles) {
        this.addRoles = addRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeRoles")
    public String[] removeRoles;
    public ModifyMembershipRolesRequest withRemoveRoles(String[] removeRoles) {
        this.removeRoles = removeRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateRolesParams")
    public UpdateMembershipRolesParams[] updateRolesParams;
    public ModifyMembershipRolesRequest withUpdateRolesParams(UpdateMembershipRolesParams[] updateRolesParams) {
        this.updateRolesParams = updateRolesParams;
        return this;
    }
}