/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DialogflowProjectsLocationsAgentsEnvironmentsListResponse {
    
    public String contentType;

    public DialogflowProjectsLocationsAgentsEnvironmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.GoogleCloudDialogflowCxV3ListEnvironmentsResponse googleCloudDialogflowCxV3ListEnvironmentsResponse;

    public DialogflowProjectsLocationsAgentsEnvironmentsListResponse withGoogleCloudDialogflowCxV3ListEnvironmentsResponse(org.openapis.openapi.models.shared.GoogleCloudDialogflowCxV3ListEnvironmentsResponse googleCloudDialogflowCxV3ListEnvironmentsResponse) {
        this.googleCloudDialogflowCxV3ListEnvironmentsResponse = googleCloudDialogflowCxV3ListEnvironmentsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public DialogflowProjectsLocationsAgentsEnvironmentsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DialogflowProjectsLocationsAgentsEnvironmentsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DialogflowProjectsLocationsAgentsEnvironmentsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
