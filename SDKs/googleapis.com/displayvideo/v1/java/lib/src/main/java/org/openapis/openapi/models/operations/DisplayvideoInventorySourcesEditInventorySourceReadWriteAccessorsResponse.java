/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse {
    
    public String contentType;

    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.InventorySourceAccessors inventorySourceAccessors;

    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse withInventorySourceAccessors(org.openapis.openapi.models.shared.InventorySourceAccessors inventorySourceAccessors) {
        this.inventorySourceAccessors = inventorySourceAccessors;
        return this;
    }
    
    
    public Integer statusCode;

    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
