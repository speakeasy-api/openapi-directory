/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class TeamsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateRequestBody requestBody;

    public TeamsCreateRequest withRequestBody(TeamsCreateRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The organization name. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;

    public TeamsCreateRequest withOrg(String org) {
        this.org = org;
        return this;
    }
    
    public TeamsCreateRequest(@JsonProperty("RequestBody") TeamsCreateRequestBody requestBody, @JsonProperty("org") String org) {
        this.requestBody = requestBody;
        this.org = org;
  }
}
