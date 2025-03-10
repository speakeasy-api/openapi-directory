/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class TestnetGetSyncResponse {
    
    public String contentType;

    public TestnetGetSyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public TestnetGetSyncResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public TestnetGetSyncResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Sync Info
     */
    
    public org.openapis.openapi.models.shared.GetSyncResponse getSyncResponse;

    public TestnetGetSyncResponse withGetSyncResponse(org.openapis.openapi.models.shared.GetSyncResponse getSyncResponse) {
        this.getSyncResponse = getSyncResponse;
        return this;
    }
    
    public TestnetGetSyncResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
