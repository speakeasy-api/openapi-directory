/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class BucketLifecycleRule {
    /**
     * The action to take.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public BucketLifecycleRuleAction action;

    public BucketLifecycleRule withAction(BucketLifecycleRuleAction action) {
        this.action = action;
        return this;
    }
    
    /**
     * The condition(s) under which the action will be taken.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public BucketLifecycleRuleCondition condition;

    public BucketLifecycleRule withCondition(BucketLifecycleRuleCondition condition) {
        this.condition = condition;
        return this;
    }
    
    public BucketLifecycleRule(){}
}
