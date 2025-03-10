/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetOrganizationAdaptivePolicyAclsResponse {
    
    public String contentType;

    public GetOrganizationAdaptivePolicyAclsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetOrganizationAdaptivePolicyAclsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetOrganizationAdaptivePolicyAclsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public java.util.Map<String, Object>[] getOrganizationAdaptivePolicyAcls200ApplicationJSONObjects;

    public GetOrganizationAdaptivePolicyAclsResponse withGetOrganizationAdaptivePolicyAcls200ApplicationJSONObjects(java.util.Map<String, Object>[] getOrganizationAdaptivePolicyAcls200ApplicationJSONObjects) {
        this.getOrganizationAdaptivePolicyAcls200ApplicationJSONObjects = getOrganizationAdaptivePolicyAcls200ApplicationJSONObjects;
        return this;
    }
    
    public GetOrganizationAdaptivePolicyAclsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
