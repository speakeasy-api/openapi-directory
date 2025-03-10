/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VcdVappSummaryListResponse - Summary information for vCD vApps.
 */
public class VcdVappSummaryListResponse {
    /**
     * List of matching objects.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public VcdVappSummary[] data;

    public VcdVappSummaryListResponse withData(VcdVappSummary[] data) {
        this.data = data;
        return this;
    }
    
    /**
     * If there is more.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasMore")
    public Boolean hasMore;

    public VcdVappSummaryListResponse withHasMore(Boolean hasMore) {
        this.hasMore = hasMore;
        return this;
    }
    
    /**
     * Total list responses.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;

    public VcdVappSummaryListResponse withTotal(Integer total) {
        this.total = total;
        return this;
    }
    
    public VcdVappSummaryListResponse(){}
}
