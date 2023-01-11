package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalAssignment
 * Associates `members` with a `role`.
**/
public class SasPortalAssignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public String[] members;
    public SasPortalAssignment withMembers(String[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public SasPortalAssignment withRole(String role) {
        this.role = role;
        return this;
    }
}