/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg200ApplicationJSON - Response
 */
public class ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg200ApplicationJSON {
    @JsonProperty("labels")
    public org.openapis.openapi.models.shared.RunnerLabel[] labels;

    public ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg200ApplicationJSON withLabels(org.openapis.openapi.models.shared.RunnerLabel[] labels) {
        this.labels = labels;
        return this;
    }
    
    @JsonProperty("total_count")
    public Long totalCount;

    public ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg200ApplicationJSON withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    
    public ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg200ApplicationJSON(@JsonProperty("labels") org.openapis.openapi.models.shared.RunnerLabel[] labels, @JsonProperty("total_count") Long totalCount) {
        this.labels = labels;
        this.totalCount = totalCount;
  }
}
