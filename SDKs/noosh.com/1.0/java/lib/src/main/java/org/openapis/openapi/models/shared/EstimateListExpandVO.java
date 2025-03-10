/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EstimateListExpandVO - Java type: com.noosh.nooshapi.vo.EstimateListExpandVO
 */
public class EstimateListExpandVO {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public EstimateBaseVO[] result;

    public EstimateListExpandVO withResult(EstimateBaseVO[] result) {
        this.result = result;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_code")
    public Integer statusCode;

    public EstimateListExpandVO withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_reason")
    public String statusReason;

    public EstimateListExpandVO withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    
    public EstimateListExpandVO(){}
}
