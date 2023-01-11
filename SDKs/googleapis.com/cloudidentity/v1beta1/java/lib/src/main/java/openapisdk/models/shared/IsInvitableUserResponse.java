package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IsInvitableUserResponse
 * Response for IsInvitableUser RPC.
**/
public class IsInvitableUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isInvitableUser")
    public Boolean isInvitableUser;
    public IsInvitableUserResponse withIsInvitableUser(Boolean isInvitableUser) {
        this.isInvitableUser = isInvitableUser;
        return this;
    }
}