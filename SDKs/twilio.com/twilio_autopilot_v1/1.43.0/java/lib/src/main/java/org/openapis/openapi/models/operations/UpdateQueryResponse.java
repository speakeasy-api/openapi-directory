/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UpdateQueryResponse {
    
    public String contentType;

    public UpdateQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public UpdateQueryResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UpdateQueryResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.AutopilotV1AssistantQuery autopilotV1AssistantQuery;

    public UpdateQueryResponse withAutopilotV1AssistantQuery(org.openapis.openapi.models.shared.AutopilotV1AssistantQuery autopilotV1AssistantQuery) {
        this.autopilotV1AssistantQuery = autopilotV1AssistantQuery;
        return this;
    }
    
    public UpdateQueryResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
