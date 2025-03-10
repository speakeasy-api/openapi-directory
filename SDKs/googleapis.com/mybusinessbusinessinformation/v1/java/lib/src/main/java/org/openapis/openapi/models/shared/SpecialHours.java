/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SpecialHours - Represents a set of time periods when a location's operational hours differ from its normal business hours.
 */
public class SpecialHours {
    /**
     * Required. A list of exceptions to the business's regular hours.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialHourPeriods")
    public SpecialHourPeriod[] specialHourPeriods;

    public SpecialHours withSpecialHourPeriods(SpecialHourPeriod[] specialHourPeriods) {
        this.specialHourPeriods = specialHourPeriods;
        return this;
    }
    
    public SpecialHours(){}
}
