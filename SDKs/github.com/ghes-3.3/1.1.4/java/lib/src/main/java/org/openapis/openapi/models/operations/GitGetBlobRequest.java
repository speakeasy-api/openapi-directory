/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GitGetBlobRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=file_sha")
    public String fileSha;

    public GitGetBlobRequest withFileSha(String fileSha) {
        this.fileSha = fileSha;
        return this;
    }
    
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public GitGetBlobRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * The name of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public GitGetBlobRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    public GitGetBlobRequest(@JsonProperty("file_sha") String fileSha, @JsonProperty("owner") String owner, @JsonProperty("repo") String repo) {
        this.fileSha = fileSha;
        this.owner = owner;
        this.repo = repo;
  }
}
