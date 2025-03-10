/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeletePolicyModule200ApplicationJSON - Success
 */
public class DeletePolicyModule200ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public DeletePolicyModule200ApplicationJSONExplanation[] explanation;

    public DeletePolicyModule200ApplicationJSON withExplanation(DeletePolicyModule200ApplicationJSONExplanation[] explanation) {
        this.explanation = explanation;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public DeletePolicyModule200ApplicationJSONMetrics metrics;

    public DeletePolicyModule200ApplicationJSON withMetrics(DeletePolicyModule200ApplicationJSONMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provenance")
    public DeletePolicyModule200ApplicationJSONProvenance provenance;

    public DeletePolicyModule200ApplicationJSON withProvenance(DeletePolicyModule200ApplicationJSONProvenance provenance) {
        this.provenance = provenance;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public DeletePolicyModule200ApplicationJSONResult[] result;

    public DeletePolicyModule200ApplicationJSON withResult(DeletePolicyModule200ApplicationJSONResult[] result) {
        this.result = result;
        return this;
    }
    
    public DeletePolicyModule200ApplicationJSON(){}
}
