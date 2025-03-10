/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestBody {
    /**
     * The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.
     */
    @JsonProperty("labels")
    public String[] labels;

    public ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestBody withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    
    public ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestBody(@JsonProperty("labels") String[] labels) {
        this.labels = labels;
  }
}
