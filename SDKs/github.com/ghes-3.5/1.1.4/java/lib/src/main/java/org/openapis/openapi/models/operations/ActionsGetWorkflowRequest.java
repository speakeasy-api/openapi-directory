/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ActionsGetWorkflowRequest {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public ActionsGetWorkflowRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * The name of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public ActionsGetWorkflowRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    /**
     * The ID of the workflow. You can also pass the workflow file name as a string.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workflow_id")
    public Object workflowId;

    public ActionsGetWorkflowRequest withWorkflowId(Object workflowId) {
        this.workflowId = workflowId;
        return this;
    }
    
    public ActionsGetWorkflowRequest(@JsonProperty("owner") String owner, @JsonProperty("repo") String repo, @JsonProperty("workflow_id") Object workflowId) {
        this.owner = owner;
        this.repo = repo;
        this.workflowId = workflowId;
  }
}
