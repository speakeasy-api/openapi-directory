package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Invitation
 * Output only. Represents a pending invitation.
**/
public class Invitation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Invitation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public InvitationRoleEnum role;
    public Invitation withRole(InvitationRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetAccount")
    public Account targetAccount;
    public Invitation withTargetAccount(Account targetAccount) {
        this.targetAccount = targetAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLocation")
    public TargetLocation targetLocation;
    public Invitation withTargetLocation(TargetLocation targetLocation) {
        this.targetLocation = targetLocation;
        return this;
    }
}