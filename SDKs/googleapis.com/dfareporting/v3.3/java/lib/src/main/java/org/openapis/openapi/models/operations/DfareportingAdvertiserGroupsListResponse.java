/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DfareportingAdvertiserGroupsListResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.AdvertiserGroupsListResponse advertiserGroupsListResponse;

    public DfareportingAdvertiserGroupsListResponse withAdvertiserGroupsListResponse(org.openapis.openapi.models.shared.AdvertiserGroupsListResponse advertiserGroupsListResponse) {
        this.advertiserGroupsListResponse = advertiserGroupsListResponse;
        return this;
    }
    
    
    public String contentType;

    public DfareportingAdvertiserGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public DfareportingAdvertiserGroupsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DfareportingAdvertiserGroupsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DfareportingAdvertiserGroupsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
