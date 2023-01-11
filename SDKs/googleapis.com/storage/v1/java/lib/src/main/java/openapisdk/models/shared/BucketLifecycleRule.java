package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BucketLifecycleRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public BucketLifecycleRuleAction action;
    public BucketLifecycleRule withAction(BucketLifecycleRuleAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public BucketLifecycleRuleCondition condition;
    public BucketLifecycleRule withCondition(BucketLifecycleRuleCondition condition) {
        this.condition = condition;
        return this;
    }
}