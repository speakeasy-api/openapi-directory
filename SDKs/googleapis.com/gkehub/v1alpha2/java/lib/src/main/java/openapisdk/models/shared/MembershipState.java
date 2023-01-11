package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MembershipState
 * MembershipState describes the state of a Membership resource.
**/
public class MembershipState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public MembershipStateCodeEnum code;
    public MembershipState withCode(MembershipStateCodeEnum code) {
        this.code = code;
        return this;
    }
}