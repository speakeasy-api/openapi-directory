package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifecyclePolicy
 * LifecyclePolicy describes how to deal with task failures based on different conditions.
**/
public class LifecyclePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public LifecyclePolicyActionEnum action;
    public LifecyclePolicy withAction(LifecyclePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionCondition")
    public ActionCondition actionCondition;
    public LifecyclePolicy withActionCondition(ActionCondition actionCondition) {
        this.actionCondition = actionCondition;
        return this;
    }
}