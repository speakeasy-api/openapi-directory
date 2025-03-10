/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CloudsearchQuerySourcesListResponse {
    
    public String contentType;

    public CloudsearchQuerySourcesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListQuerySourcesResponse listQuerySourcesResponse;

    public CloudsearchQuerySourcesListResponse withListQuerySourcesResponse(org.openapis.openapi.models.shared.ListQuerySourcesResponse listQuerySourcesResponse) {
        this.listQuerySourcesResponse = listQuerySourcesResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public CloudsearchQuerySourcesListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CloudsearchQuerySourcesListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CloudsearchQuerySourcesListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
