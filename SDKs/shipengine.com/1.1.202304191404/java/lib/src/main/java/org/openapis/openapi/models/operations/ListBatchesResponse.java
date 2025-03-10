/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListBatchesResponse {
    
    public String contentType;

    public ListBatchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ListBatchesResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListBatchesResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * The specified resource does not exist.
     */
    
    public org.openapis.openapi.models.shared.ErrorResponseBody errorResponseBody;

    public ListBatchesResponse withErrorResponseBody(org.openapis.openapi.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    
    /**
     * The request was a success.
     */
    
    public org.openapis.openapi.models.shared.ListBatchesResponseBody listBatchesResponseBody;

    public ListBatchesResponse withListBatchesResponseBody(org.openapis.openapi.models.shared.ListBatchesResponseBody listBatchesResponseBody) {
        this.listBatchesResponseBody = listBatchesResponseBody;
        return this;
    }
    
    public ListBatchesResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
