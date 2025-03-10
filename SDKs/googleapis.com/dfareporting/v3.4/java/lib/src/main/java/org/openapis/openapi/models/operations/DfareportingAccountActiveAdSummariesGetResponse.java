/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DfareportingAccountActiveAdSummariesGetResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.AccountActiveAdSummary accountActiveAdSummary;

    public DfareportingAccountActiveAdSummariesGetResponse withAccountActiveAdSummary(org.openapis.openapi.models.shared.AccountActiveAdSummary accountActiveAdSummary) {
        this.accountActiveAdSummary = accountActiveAdSummary;
        return this;
    }
    
    
    public String contentType;

    public DfareportingAccountActiveAdSummariesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public DfareportingAccountActiveAdSummariesGetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DfareportingAccountActiveAdSummariesGetResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DfareportingAccountActiveAdSummariesGetResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
