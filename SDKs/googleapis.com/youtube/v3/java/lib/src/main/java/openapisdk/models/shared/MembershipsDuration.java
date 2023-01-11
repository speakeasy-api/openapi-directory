package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MembershipsDuration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberSince")
    public String memberSince;
    public MembershipsDuration withMemberSince(String memberSince) {
        this.memberSince = memberSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberTotalDurationMonths")
    public Integer memberTotalDurationMonths;
    public MembershipsDuration withMemberTotalDurationMonths(Integer memberTotalDurationMonths) {
        this.memberTotalDurationMonths = memberTotalDurationMonths;
        return this;
    }
}