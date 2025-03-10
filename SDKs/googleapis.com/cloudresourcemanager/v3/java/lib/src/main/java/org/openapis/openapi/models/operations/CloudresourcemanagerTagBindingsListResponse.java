/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CloudresourcemanagerTagBindingsListResponse {
    
    public String contentType;

    public CloudresourcemanagerTagBindingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListTagBindingsResponse listTagBindingsResponse;

    public CloudresourcemanagerTagBindingsListResponse withListTagBindingsResponse(org.openapis.openapi.models.shared.ListTagBindingsResponse listTagBindingsResponse) {
        this.listTagBindingsResponse = listTagBindingsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public CloudresourcemanagerTagBindingsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CloudresourcemanagerTagBindingsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CloudresourcemanagerTagBindingsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
