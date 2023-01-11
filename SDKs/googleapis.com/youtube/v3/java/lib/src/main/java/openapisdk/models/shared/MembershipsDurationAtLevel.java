package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MembershipsDurationAtLevel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public String level;
    public MembershipsDurationAtLevel withLevel(String level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberSince")
    public String memberSince;
    public MembershipsDurationAtLevel withMemberSince(String memberSince) {
        this.memberSince = memberSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberTotalDurationMonths")
    public Integer memberTotalDurationMonths;
    public MembershipsDurationAtLevel withMemberTotalDurationMonths(Integer memberTotalDurationMonths) {
        this.memberTotalDurationMonths = memberTotalDurationMonths;
        return this;
    }
}