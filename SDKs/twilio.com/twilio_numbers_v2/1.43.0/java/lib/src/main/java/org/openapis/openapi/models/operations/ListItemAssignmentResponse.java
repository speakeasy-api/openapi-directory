/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListItemAssignmentResponse {
    
    public String contentType;

    public ListItemAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public ListItemAssignmentListItemAssignmentResponse listItemAssignmentResponse;

    public ListItemAssignmentResponse withListItemAssignmentResponse(ListItemAssignmentListItemAssignmentResponse listItemAssignmentResponse) {
        this.listItemAssignmentResponse = listItemAssignmentResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ListItemAssignmentResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListItemAssignmentResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ListItemAssignmentResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
