/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InstancesFailoverRequest - Instance failover request.
 */
public class InstancesFailoverRequest {
    /**
     * Database instance failover context.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failoverContext")
    public FailoverContext failoverContext;

    public InstancesFailoverRequest withFailoverContext(FailoverContext failoverContext) {
        this.failoverContext = failoverContext;
        return this;
    }
    
    public InstancesFailoverRequest(){}
}
