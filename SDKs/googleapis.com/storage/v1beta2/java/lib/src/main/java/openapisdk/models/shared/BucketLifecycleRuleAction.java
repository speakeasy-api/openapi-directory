package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketLifecycleRuleAction
 * The action to take.
**/
public class BucketLifecycleRuleAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public BucketLifecycleRuleAction withType(String type) {
        this.type = type;
        return this;
    }
}