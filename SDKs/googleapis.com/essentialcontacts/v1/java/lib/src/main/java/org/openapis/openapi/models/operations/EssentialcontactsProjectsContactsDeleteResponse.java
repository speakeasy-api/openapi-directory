/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class EssentialcontactsProjectsContactsDeleteResponse {
    
    public String contentType;

    public EssentialcontactsProjectsContactsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public java.util.Map<String, Object> googleProtobufEmpty;

    public EssentialcontactsProjectsContactsDeleteResponse withGoogleProtobufEmpty(java.util.Map<String, Object> googleProtobufEmpty) {
        this.googleProtobufEmpty = googleProtobufEmpty;
        return this;
    }
    
    
    public Integer statusCode;

    public EssentialcontactsProjectsContactsDeleteResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public EssentialcontactsProjectsContactsDeleteResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public EssentialcontactsProjectsContactsDeleteResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
