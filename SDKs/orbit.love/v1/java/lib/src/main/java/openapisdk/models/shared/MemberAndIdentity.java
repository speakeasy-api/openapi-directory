package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MemberAndIdentity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public Identity identity;
    public MemberAndIdentity withIdentity(Identity identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member")
    public Member member;
    public MemberAndIdentity withMember(Member member) {
        this.member = member;
        return this;
    }
}