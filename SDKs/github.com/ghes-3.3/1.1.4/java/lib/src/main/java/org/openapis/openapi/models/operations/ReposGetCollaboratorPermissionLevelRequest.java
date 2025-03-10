/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ReposGetCollaboratorPermissionLevelRequest {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public ReposGetCollaboratorPermissionLevelRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * The name of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public ReposGetCollaboratorPermissionLevelRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    /**
     * The handle for the GitHub user account.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;

    public ReposGetCollaboratorPermissionLevelRequest withUsername(String username) {
        this.username = username;
        return this;
    }
    
    public ReposGetCollaboratorPermissionLevelRequest(@JsonProperty("owner") String owner, @JsonProperty("repo") String repo, @JsonProperty("username") String username) {
        this.owner = owner;
        this.repo = repo;
        this.username = username;
  }
}
