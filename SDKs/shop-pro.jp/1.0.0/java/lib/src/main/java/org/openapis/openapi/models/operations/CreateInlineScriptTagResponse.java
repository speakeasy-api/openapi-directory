/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateInlineScriptTagResponse {
    
    public String contentType;

    public CreateInlineScriptTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateInlineScriptTagResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateInlineScriptTagResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    
    public CreateInlineScriptTag201ApplicationJSON createInlineScriptTag201ApplicationJSONObject;

    public CreateInlineScriptTagResponse withCreateInlineScriptTag201ApplicationJSONObject(CreateInlineScriptTag201ApplicationJSON createInlineScriptTag201ApplicationJSONObject) {
        this.createInlineScriptTag201ApplicationJSONObject = createInlineScriptTag201ApplicationJSONObject;
        return this;
    }
    
    public CreateInlineScriptTagResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
