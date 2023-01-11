package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssueTokenRequestMetadataRulesFees {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public IssueTokenRequestMetadataRulesFeesItems[] items;
    public IssueTokenRequestMetadataRulesFees withItems(IssueTokenRequestMetadataRulesFeesItems[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public IssueTokenRequestMetadataRulesFees withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
}