/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RatePlanRestrictionsLengthOfStay - Determines the length of stay in nights for which this rate plan can be booked.
 */
public class RatePlanRestrictionsLengthOfStay {
    /**
     * The maximum number of nights (inclusive) a guest can stay to be eligible for this rate plan.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max")
    public Double max;

    public RatePlanRestrictionsLengthOfStay withMax(Double max) {
        this.max = max;
        return this;
    }
    
    /**
     * The minimum number of nights (inclusive) a guest has to stay to be eligible for this rate plan.
     */
    @JsonProperty("min")
    public Double min;

    public RatePlanRestrictionsLengthOfStay withMin(Double min) {
        this.min = min;
        return this;
    }
    
    public RatePlanRestrictionsLengthOfStay(@JsonProperty("min") Double min) {
        this.min = min;
  }
}
