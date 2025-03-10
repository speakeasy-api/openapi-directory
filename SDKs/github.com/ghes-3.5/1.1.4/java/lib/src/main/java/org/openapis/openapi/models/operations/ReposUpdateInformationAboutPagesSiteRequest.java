/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ReposUpdateInformationAboutPagesSiteRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object requestBody;

    public ReposUpdateInformationAboutPagesSiteRequest withRequestBody(Object requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public ReposUpdateInformationAboutPagesSiteRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * The name of the repository. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public ReposUpdateInformationAboutPagesSiteRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    public ReposUpdateInformationAboutPagesSiteRequest(@JsonProperty("RequestBody") Object requestBody, @JsonProperty("owner") String owner, @JsonProperty("repo") String repo) {
        this.requestBody = requestBody;
        this.owner = owner;
        this.repo = repo;
  }
}
