/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ReposCreateForkRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateForkRequestBody requestBody;

    public ReposCreateForkRequest withRequestBody(ReposCreateForkRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public ReposCreateForkRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * The name of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public ReposCreateForkRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    public ReposCreateForkRequest(@JsonProperty("owner") String owner, @JsonProperty("repo") String repo) {
        this.owner = owner;
        this.repo = repo;
  }
}
