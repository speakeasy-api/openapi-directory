/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AdmobAccountsListResponse {
    
    public String contentType;

    public AdmobAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListPublisherAccountsResponse listPublisherAccountsResponse;

    public AdmobAccountsListResponse withListPublisherAccountsResponse(org.openapis.openapi.models.shared.ListPublisherAccountsResponse listPublisherAccountsResponse) {
        this.listPublisherAccountsResponse = listPublisherAccountsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public AdmobAccountsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AdmobAccountsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public AdmobAccountsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
