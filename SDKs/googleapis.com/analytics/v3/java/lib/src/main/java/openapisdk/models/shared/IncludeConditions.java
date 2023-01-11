package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IncludeConditions
 * JSON template for an Analytics Remarketing Include Conditions.
**/
public class IncludeConditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("daysToLookBack")
    public Integer daysToLookBack;
    public IncludeConditions withDaysToLookBack(Integer daysToLookBack) {
        this.daysToLookBack = daysToLookBack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSmartList")
    public Boolean isSmartList;
    public IncludeConditions withIsSmartList(Boolean isSmartList) {
        this.isSmartList = isSmartList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public IncludeConditions withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipDurationDays")
    public Integer membershipDurationDays;
    public IncludeConditions withMembershipDurationDays(Integer membershipDurationDays) {
        this.membershipDurationDays = membershipDurationDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segment")
    public String segment;
    public IncludeConditions withSegment(String segment) {
        this.segment = segment;
        return this;
    }
}