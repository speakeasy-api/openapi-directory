/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceCondition - ResourceCondition provides a standard mechanism for higher-level status reporting from controller.
 */
public class ResourceCondition {
    /**
     * Last time the condition transit from one status to another.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastTransitionTime")
    public String lastTransitionTime;

    public ResourceCondition withLastTransitionTime(String lastTransitionTime) {
        this.lastTransitionTime = lastTransitionTime;
        return this;
    }
    
    /**
     * Human-readable message indicating details about last transition.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public ResourceCondition withMessage(String message) {
        this.message = message;
        return this;
    }
    
    /**
     * Machine-readable message indicating details about last transition.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;

    public ResourceCondition withReason(String reason) {
        this.reason = reason;
        return this;
    }
    
    /**
     * state of the condition.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ResourceConditionStateEnum state;

    public ResourceCondition withState(ResourceConditionStateEnum state) {
        this.state = state;
        return this;
    }
    
    /**
     * Type of the condition. (e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public ResourceCondition withType(String type) {
        this.type = type;
        return this;
    }
    
    public ResourceCondition(){}
}
