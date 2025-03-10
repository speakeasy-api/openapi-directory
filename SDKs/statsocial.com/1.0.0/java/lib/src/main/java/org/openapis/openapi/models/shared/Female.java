/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Female {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("average")
    public Long average;

    public Female withAverage(Long average) {
        this.average = average;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiplicity")
    public Long multiplicity;

    public Female withMultiplicity(Long multiplicity) {
        this.multiplicity = multiplicity;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentile")
    public Long percentile;

    public Female withPercentile(Long percentile) {
        this.percentile = percentile;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistical_info")
    public StatisticalInfoF statisticalInfo;

    public Female withStatisticalInfo(StatisticalInfoF statisticalInfo) {
        this.statisticalInfo = statisticalInfo;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stdev")
    public Long stdev;

    public Female withStdev(Long stdev) {
        this.stdev = stdev;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Long value;

    public Female withValue(Long value) {
        this.value = value;
        return this;
    }
    
    public Female(){}
}
