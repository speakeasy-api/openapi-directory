/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class FetchModelBuildResponse {
    
    public String contentType;

    public FetchModelBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public FetchModelBuildResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public FetchModelBuildResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.AutopilotV1AssistantModelBuild autopilotV1AssistantModelBuild;

    public FetchModelBuildResponse withAutopilotV1AssistantModelBuild(org.openapis.openapi.models.shared.AutopilotV1AssistantModelBuild autopilotV1AssistantModelBuild) {
        this.autopilotV1AssistantModelBuild = autopilotV1AssistantModelBuild;
        return this;
    }
    
    public FetchModelBuildResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
