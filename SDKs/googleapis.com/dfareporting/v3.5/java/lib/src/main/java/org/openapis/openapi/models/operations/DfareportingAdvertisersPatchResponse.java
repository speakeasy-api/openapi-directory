/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DfareportingAdvertisersPatchResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.Advertiser advertiser;

    public DfareportingAdvertisersPatchResponse withAdvertiser(org.openapis.openapi.models.shared.Advertiser advertiser) {
        this.advertiser = advertiser;
        return this;
    }
    
    
    public String contentType;

    public DfareportingAdvertisersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public DfareportingAdvertisersPatchResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DfareportingAdvertisersPatchResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DfareportingAdvertisersPatchResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
