/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeleteClientValidatorResponse {
    
    public String contentType;

    public DeleteClientValidatorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public org.openapis.openapi.models.shared.Deleted deleted;

    public DeleteClientValidatorResponse withDeleted(org.openapis.openapi.models.shared.Deleted deleted) {
        this.deleted = deleted;
        return this;
    }
    
    
    public Integer statusCode;

    public DeleteClientValidatorResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeleteClientValidatorResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DeleteClientValidatorResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
