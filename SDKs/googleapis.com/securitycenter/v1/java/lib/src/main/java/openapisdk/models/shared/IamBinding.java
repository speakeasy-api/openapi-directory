package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IamBinding
 * Represents a particular IAM binding, which captures a member's role addition, removal, or state.
**/
public class IamBinding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public IamBindingActionEnum action;
    public IamBinding withAction(IamBindingActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member")
    public String member;
    public IamBinding withMember(String member) {
        this.member = member;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public IamBinding withRole(String role) {
        this.role = role;
        return this;
    }
}