/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InstanceGroupManagerAggregatedListWarning - [Output Only] Informational warning message.
 */
public class InstanceGroupManagerAggregatedListWarning {
    /**
     * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public InstanceGroupManagerAggregatedListWarningCodeEnum code;

    public InstanceGroupManagerAggregatedListWarning withCode(InstanceGroupManagerAggregatedListWarningCodeEnum code) {
        this.code = code;
        return this;
    }
    
    /**
     * [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" } 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public InstanceGroupManagerAggregatedListWarningData[] data;

    public InstanceGroupManagerAggregatedListWarning withData(InstanceGroupManagerAggregatedListWarningData[] data) {
        this.data = data;
        return this;
    }
    
    /**
     * [Output Only] A human-readable description of the warning code.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public InstanceGroupManagerAggregatedListWarning withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public InstanceGroupManagerAggregatedListWarning(){}
}
