/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BrowserAssignedTargetingOptionDetailsInput - Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.
 */
public class BrowserAssignedTargetingOptionDetailsInput {
    /**
     * Indicates if this option is being negatively targeted. All assigned browser targeting options on the same resource must have the same value for this field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negative")
    public Boolean negative;

    public BrowserAssignedTargetingOptionDetailsInput withNegative(Boolean negative) {
        this.negative = negative;
        return this;
    }
    
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BROWSER`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;

    public BrowserAssignedTargetingOptionDetailsInput withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
    
    public BrowserAssignedTargetingOptionDetailsInput(){}
}
