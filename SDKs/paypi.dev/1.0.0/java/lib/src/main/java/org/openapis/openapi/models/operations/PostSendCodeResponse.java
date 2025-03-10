/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PostSendCodeResponse {
    
    public String contentType;

    public PostSendCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public PostSendCodeResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PostSendCodeResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Success - Email sent
     */
    
    public PostSendCode200ApplicationJSON postSendCode200ApplicationJSONObject;

    public PostSendCodeResponse withPostSendCode200ApplicationJSONObject(PostSendCode200ApplicationJSON postSendCode200ApplicationJSONObject) {
        this.postSendCode200ApplicationJSONObject = postSendCode200ApplicationJSONObject;
        return this;
    }
    
    /**
     * Invalid or incorrectly formatted email given
     */
    
    public PostSendCode400ApplicationJSON postSendCode400ApplicationJSONObject;

    public PostSendCodeResponse withPostSendCode400ApplicationJSONObject(PostSendCode400ApplicationJSON postSendCode400ApplicationJSONObject) {
        this.postSendCode400ApplicationJSONObject = postSendCode400ApplicationJSONObject;
        return this;
    }
    
    /**
     * Invalid API key
     */
    
    public PostSendCode401ApplicationJSON postSendCode401ApplicationJSONObject;

    public PostSendCodeResponse withPostSendCode401ApplicationJSONObject(PostSendCode401ApplicationJSON postSendCode401ApplicationJSONObject) {
        this.postSendCode401ApplicationJSONObject = postSendCode401ApplicationJSONObject;
        return this;
    }
    
    public PostSendCodeResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
