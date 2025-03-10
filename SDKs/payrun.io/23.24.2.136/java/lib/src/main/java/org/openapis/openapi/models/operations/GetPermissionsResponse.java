/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetPermissionsResponse {
    
    public String contentType;

    public GetPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.ErrorModel errorModel;

    public GetPermissionsResponse withErrorModel(org.openapis.openapi.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    
    /**
     * The link collection object.
     */
    
    public org.openapis.openapi.models.shared.LinkCollection linkCollection;

    public GetPermissionsResponse withLinkCollection(org.openapis.openapi.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    
    
    public Integer statusCode;

    public GetPermissionsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetPermissionsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetPermissionsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
