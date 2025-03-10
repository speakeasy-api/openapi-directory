/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TimeMachinePointDailyStatsWindData {
    /**
     * Long-term average wind angle.
     * Unit: deg
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_angle")
    public Double avgAngle;

    public TimeMachinePointDailyStatsWindData withAvgAngle(Double avgAngle) {
        this.avgAngle = avgAngle;
        return this;
    }
    
    /**
     * Long-term average wind direction in 'N', 'NNE', 'NE', ... 'NNW' format.
     * Unit: 16dir
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_dir")
    public byte[] avgDir;

    public TimeMachinePointDailyStatsWindData withAvgDir(byte[] avgDir) {
        this.avgDir = avgDir;
        return this;
    }
    
    /**
     * Long-term average wind speed.
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avg_speed")
    public Double avgSpeed;

    public TimeMachinePointDailyStatsWindData withAvgSpeed(Double avgSpeed) {
        this.avgSpeed = avgSpeed;
        return this;
    }
    
    /**
     * Historical daily maximum wind gust speed.
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_gust")
    public Double maxGust;

    public TimeMachinePointDailyStatsWindData withMaxGust(Double maxGust) {
        this.maxGust = maxGust;
        return this;
    }
    
    /**
     * Historical daily maximum wind speed.
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_speed")
    public Double maxSpeed;

    public TimeMachinePointDailyStatsWindData withMaxSpeed(Double maxSpeed) {
        this.maxSpeed = maxSpeed;
        return this;
    }
    
    public TimeMachinePointDailyStatsWindData(){}
}
