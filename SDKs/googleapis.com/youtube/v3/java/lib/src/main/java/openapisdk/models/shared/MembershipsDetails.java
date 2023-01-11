package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MembershipsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessibleLevels")
    public String[] accessibleLevels;
    public MembershipsDetails withAccessibleLevels(String[] accessibleLevels) {
        this.accessibleLevels = accessibleLevels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highestAccessibleLevel")
    public String highestAccessibleLevel;
    public MembershipsDetails withHighestAccessibleLevel(String highestAccessibleLevel) {
        this.highestAccessibleLevel = highestAccessibleLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highestAccessibleLevelDisplayName")
    public String highestAccessibleLevelDisplayName;
    public MembershipsDetails withHighestAccessibleLevelDisplayName(String highestAccessibleLevelDisplayName) {
        this.highestAccessibleLevelDisplayName = highestAccessibleLevelDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipsDuration")
    public MembershipsDuration membershipsDuration;
    public MembershipsDetails withMembershipsDuration(MembershipsDuration membershipsDuration) {
        this.membershipsDuration = membershipsDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipsDurationAtLevels")
    public MembershipsDurationAtLevel[] membershipsDurationAtLevels;
    public MembershipsDetails withMembershipsDurationAtLevels(MembershipsDurationAtLevel[] membershipsDurationAtLevels) {
        this.membershipsDurationAtLevels = membershipsDurationAtLevels;
        return this;
    }
}