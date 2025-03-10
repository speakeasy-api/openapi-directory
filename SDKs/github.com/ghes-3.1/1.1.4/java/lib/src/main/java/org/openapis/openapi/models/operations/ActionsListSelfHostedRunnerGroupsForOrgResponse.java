/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ActionsListSelfHostedRunnerGroupsForOrgResponse {
    
    public String contentType;

    public ActionsListSelfHostedRunnerGroupsForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ActionsListSelfHostedRunnerGroupsForOrgResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ActionsListSelfHostedRunnerGroupsForOrgResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject;

    public ActionsListSelfHostedRunnerGroupsForOrgResponse withActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject(ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject) {
        this.actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject = actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject;
        return this;
    }
    
    public ActionsListSelfHostedRunnerGroupsForOrgResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
