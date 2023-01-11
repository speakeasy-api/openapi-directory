package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcquisitionTargetingRule
 * Represents a targeting rule of the form: User never had {scope} before.
**/
public class AcquisitionTargetingRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public TargetingRuleScope scope;
    public AcquisitionTargetingRule withScope(TargetingRuleScope scope) {
        this.scope = scope;
        return this;
    }
}