/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AndroiddeviceprovisioningPartnersCustomersListResponse {
    
    public String contentType;

    public AndroiddeviceprovisioningPartnersCustomersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListCustomersResponse listCustomersResponse;

    public AndroiddeviceprovisioningPartnersCustomersListResponse withListCustomersResponse(org.openapis.openapi.models.shared.ListCustomersResponse listCustomersResponse) {
        this.listCustomersResponse = listCustomersResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public AndroiddeviceprovisioningPartnersCustomersListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AndroiddeviceprovisioningPartnersCustomersListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public AndroiddeviceprovisioningPartnersCustomersListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
