/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RfeItemSimpleEXTVO - Java type: com.noosh.nooshapi.vo.RfeItemSimpleEXTVO
 */
public class RfeItemSimpleEXTVO {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_id")
    public Long jobId;

    public RfeItemSimpleEXTVO withJobId(Long jobId) {
        this.jobId = jobId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rfe_item_id")
    public Long rfeItemId;

    public RfeItemSimpleEXTVO withRfeItemId(Long rfeItemId) {
        this.rfeItemId = rfeItemId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rfe_item_options")
    public RfeItemOptionVO[] rfeItemOptions;

    public RfeItemSimpleEXTVO withRfeItemOptions(RfeItemOptionVO[] rfeItemOptions) {
        this.rfeItemOptions = rfeItemOptions;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec_id")
    public Long specId;

    public RfeItemSimpleEXTVO withSpecId(Long specId) {
        this.specId = specId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec_name")
    public String specName;

    public RfeItemSimpleEXTVO withSpecName(String specName) {
        this.specName = specName;
        return this;
    }
    
    public RfeItemSimpleEXTVO(){}
}
