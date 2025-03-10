/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ReposGetWebhookConfigForRepoRequest {
    /**
     * The unique identifier of the hook.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;

    public ReposGetWebhookConfigForRepoRequest withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
    
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public ReposGetWebhookConfigForRepoRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * The name of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public ReposGetWebhookConfigForRepoRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    public ReposGetWebhookConfigForRepoRequest(@JsonProperty("hook_id") Long hookId, @JsonProperty("owner") String owner, @JsonProperty("repo") String repo) {
        this.hookId = hookId;
        this.owner = owner;
        this.repo = repo;
  }
}
