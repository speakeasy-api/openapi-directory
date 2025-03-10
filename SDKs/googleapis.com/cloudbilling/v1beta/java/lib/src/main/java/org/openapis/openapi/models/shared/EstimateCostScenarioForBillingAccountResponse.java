/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EstimateCostScenarioForBillingAccountResponse - Response for EstimateCostScenarioForBillingAccount
 */
public class EstimateCostScenarioForBillingAccountResponse {
    /**
     * The result of a estimating the costs of a `CostScenario`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costEstimationResult")
    public CostEstimationResult costEstimationResult;

    public EstimateCostScenarioForBillingAccountResponse withCostEstimationResult(CostEstimationResult costEstimationResult) {
        this.costEstimationResult = costEstimationResult;
        return this;
    }
    
    public EstimateCostScenarioForBillingAccountResponse(){}
}
