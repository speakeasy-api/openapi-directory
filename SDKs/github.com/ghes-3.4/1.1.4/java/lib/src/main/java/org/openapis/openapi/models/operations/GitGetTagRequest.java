/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GitGetTagRequest {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public GitGetTagRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * The name of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public GitGetTagRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_sha")
    public String tagSha;

    public GitGetTagRequest withTagSha(String tagSha) {
        this.tagSha = tagSha;
        return this;
    }
    
    public GitGetTagRequest(@JsonProperty("owner") String owner, @JsonProperty("repo") String repo, @JsonProperty("tag_sha") String tagSha) {
        this.owner = owner;
        this.repo = repo;
        this.tagSha = tagSha;
  }
}
