/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class OrgsListAppInstallationsResponse {
    
    public String contentType;

    public OrgsListAppInstallationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public OrgsListAppInstallationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public OrgsListAppInstallationsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public OrgsListAppInstallationsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public OrgsListAppInstallations200ApplicationJSON orgsListAppInstallations200ApplicationJSONObject;

    public OrgsListAppInstallationsResponse withOrgsListAppInstallations200ApplicationJSONObject(OrgsListAppInstallations200ApplicationJSON orgsListAppInstallations200ApplicationJSONObject) {
        this.orgsListAppInstallations200ApplicationJSONObject = orgsListAppInstallations200ApplicationJSONObject;
        return this;
    }
    
    public OrgsListAppInstallationsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
