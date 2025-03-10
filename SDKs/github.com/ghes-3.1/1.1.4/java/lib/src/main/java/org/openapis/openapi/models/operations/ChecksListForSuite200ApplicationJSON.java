/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChecksListForSuite200ApplicationJSON - Response
 */
public class ChecksListForSuite200ApplicationJSON {
    @JsonProperty("check_runs")
    public org.openapis.openapi.models.shared.CheckRun[] checkRuns;

    public ChecksListForSuite200ApplicationJSON withCheckRuns(org.openapis.openapi.models.shared.CheckRun[] checkRuns) {
        this.checkRuns = checkRuns;
        return this;
    }
    
    @JsonProperty("total_count")
    public Long totalCount;

    public ChecksListForSuite200ApplicationJSON withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    
    public ChecksListForSuite200ApplicationJSON(@JsonProperty("check_runs") org.openapis.openapi.models.shared.CheckRun[] checkRuns, @JsonProperty("total_count") Long totalCount) {
        this.checkRuns = checkRuns;
        this.totalCount = totalCount;
  }
}
