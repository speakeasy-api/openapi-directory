/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiDataRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clicks")
    public Double clicks;

    public ApiDataRow withClicks(Double clicks) {
        this.clicks = clicks;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ctr")
    public Double ctr;

    public ApiDataRow withCtr(Double ctr) {
        this.ctr = ctr;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressions")
    public Double impressions;

    public ApiDataRow withImpressions(Double impressions) {
        this.impressions = impressions;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys")
    public String[] keys;

    public ApiDataRow withKeys(String[] keys) {
        this.keys = keys;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Double position;

    public ApiDataRow withPosition(Double position) {
        this.position = position;
        return this;
    }
    
    public ApiDataRow(){}
}
