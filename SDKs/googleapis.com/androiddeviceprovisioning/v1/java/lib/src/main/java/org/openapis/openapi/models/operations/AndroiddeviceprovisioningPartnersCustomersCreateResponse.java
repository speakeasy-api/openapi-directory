/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AndroiddeviceprovisioningPartnersCustomersCreateResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.Company company;

    public AndroiddeviceprovisioningPartnersCustomersCreateResponse withCompany(org.openapis.openapi.models.shared.Company company) {
        this.company = company;
        return this;
    }
    
    
    public String contentType;

    public AndroiddeviceprovisioningPartnersCustomersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public AndroiddeviceprovisioningPartnersCustomersCreateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AndroiddeviceprovisioningPartnersCustomersCreateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public AndroiddeviceprovisioningPartnersCustomersCreateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
