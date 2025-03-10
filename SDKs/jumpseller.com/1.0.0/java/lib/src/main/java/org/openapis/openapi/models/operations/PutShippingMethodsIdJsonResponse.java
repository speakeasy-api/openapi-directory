/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PutShippingMethodsIdJsonResponse {
    
    public String contentType;

    public PutShippingMethodsIdJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Shipping Method Not Found.
     */
    
    public org.openapis.openapi.models.shared.NotFound notFound;

    public PutShippingMethodsIdJsonResponse withNotFound(org.openapis.openapi.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.ShippingMethod shippingMethod;

    public PutShippingMethodsIdJsonResponse withShippingMethod(org.openapis.openapi.models.shared.ShippingMethod shippingMethod) {
        this.shippingMethod = shippingMethod;
        return this;
    }
    
    
    public Integer statusCode;

    public PutShippingMethodsIdJsonResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PutShippingMethodsIdJsonResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PutShippingMethodsIdJsonResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
