/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class RetrieveAccountMetadataResponse {
    /**
     * sample account metadata
     */
    
    public org.openapis.openapi.models.shared.Account account;

    public RetrieveAccountMetadataResponse withAccount(org.openapis.openapi.models.shared.Account account) {
        this.account = account;
        return this;
    }
    
    
    public String contentType;

    public RetrieveAccountMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public RetrieveAccountMetadataResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public RetrieveAccountMetadataResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Invalid token
     */
    
    public java.util.Map<String, Object> retrieveAccountMetadata401ApplicationJSONObject;

    public RetrieveAccountMetadataResponse withRetrieveAccountMetadata401ApplicationJSONObject(java.util.Map<String, Object> retrieveAccountMetadata401ApplicationJSONObject) {
        this.retrieveAccountMetadata401ApplicationJSONObject = retrieveAccountMetadata401ApplicationJSONObject;
        return this;
    }
    
    /**
     * IP Access denied
     */
    
    public java.util.Map<String, Object> retrieveAccountMetadata403ApplicationJSONObject;

    public RetrieveAccountMetadataResponse withRetrieveAccountMetadata403ApplicationJSONObject(java.util.Map<String, Object> retrieveAccountMetadata403ApplicationJSONObject) {
        this.retrieveAccountMetadata403ApplicationJSONObject = retrieveAccountMetadata403ApplicationJSONObject;
        return this;
    }
    
    /**
     * Account not found error
     */
    
    public java.util.Map<String, Object> retrieveAccountMetadata404ApplicationJSONObject;

    public RetrieveAccountMetadataResponse withRetrieveAccountMetadata404ApplicationJSONObject(java.util.Map<String, Object> retrieveAccountMetadata404ApplicationJSONObject) {
        this.retrieveAccountMetadata404ApplicationJSONObject = retrieveAccountMetadata404ApplicationJSONObject;
        return this;
    }
    
    /**
     * Nordigen rate limit exceeded
     */
    
    public java.util.Map<String, Object> retrieveAccountMetadata429ApplicationJSONObject;

    public RetrieveAccountMetadataResponse withRetrieveAccountMetadata429ApplicationJSONObject(java.util.Map<String, Object> retrieveAccountMetadata429ApplicationJSONObject) {
        this.retrieveAccountMetadata429ApplicationJSONObject = retrieveAccountMetadata429ApplicationJSONObject;
        return this;
    }
    
    public RetrieveAccountMetadataResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
