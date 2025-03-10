/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ActionsListLabelsForSelfHostedRunnerForRepoRequest {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public ActionsListLabelsForSelfHostedRunnerForRepoRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * The name of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public ActionsListLabelsForSelfHostedRunnerForRepoRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    /**
     * Unique identifier of the self-hosted runner.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_id")
    public Long runnerId;

    public ActionsListLabelsForSelfHostedRunnerForRepoRequest withRunnerId(Long runnerId) {
        this.runnerId = runnerId;
        return this;
    }
    
    public ActionsListLabelsForSelfHostedRunnerForRepoRequest(@JsonProperty("owner") String owner, @JsonProperty("repo") String repo, @JsonProperty("runner_id") Long runnerId) {
        this.owner = owner;
        this.repo = repo;
        this.runnerId = runnerId;
  }
}
