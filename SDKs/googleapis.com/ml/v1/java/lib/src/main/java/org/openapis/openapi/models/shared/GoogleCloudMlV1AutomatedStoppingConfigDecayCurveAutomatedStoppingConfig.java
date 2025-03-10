/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig {
    /**
     * If true, measurement.elapsed_time is used as the x-axis of each Trials Decay Curve. Otherwise, Measurement.steps will be used as the x-axis.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useElapsedTime")
    public Boolean useElapsedTime;

    public GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig withUseElapsedTime(Boolean useElapsedTime) {
        this.useElapsedTime = useElapsedTime;
        return this;
    }
    
    public GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig(){}
}
