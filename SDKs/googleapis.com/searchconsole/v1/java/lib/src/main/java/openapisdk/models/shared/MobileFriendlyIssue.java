package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MobileFriendlyIssue
 * Mobile-friendly issue.
**/
public class MobileFriendlyIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public MobileFriendlyIssueRuleEnum rule;
    public MobileFriendlyIssue withRule(MobileFriendlyIssueRuleEnum rule) {
        this.rule = rule;
        return this;
    }
}