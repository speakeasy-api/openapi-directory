/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ContentOrdersCustombatchResponse {
    
    public String contentType;

    public ContentOrdersCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.OrdersCustomBatchResponse ordersCustomBatchResponse;

    public ContentOrdersCustombatchResponse withOrdersCustomBatchResponse(org.openapis.openapi.models.shared.OrdersCustomBatchResponse ordersCustomBatchResponse) {
        this.ordersCustomBatchResponse = ordersCustomBatchResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ContentOrdersCustombatchResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ContentOrdersCustombatchResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ContentOrdersCustombatchResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
