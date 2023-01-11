package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendTokenRequestMetadataRulesFees {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public SendTokenRequestMetadataRulesFeesItems[] items;
    public SendTokenRequestMetadataRulesFees withItems(SendTokenRequestMetadataRulesFeesItems[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public SendTokenRequestMetadataRulesFees withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
}