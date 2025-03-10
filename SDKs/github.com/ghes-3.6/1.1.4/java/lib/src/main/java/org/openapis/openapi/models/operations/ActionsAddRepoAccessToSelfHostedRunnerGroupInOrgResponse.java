/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse {
    
    public String contentType;

    public ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
