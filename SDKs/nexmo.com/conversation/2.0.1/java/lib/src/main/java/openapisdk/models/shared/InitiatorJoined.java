package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InitiatorJoined {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSystem")
    public Boolean isSystem;
    public InitiatorJoined withIsSystem(Boolean isSystem) {
        this.isSystem = isSystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member_id")
    public String memberId;
    public InitiatorJoined withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public InitiatorJoined withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}