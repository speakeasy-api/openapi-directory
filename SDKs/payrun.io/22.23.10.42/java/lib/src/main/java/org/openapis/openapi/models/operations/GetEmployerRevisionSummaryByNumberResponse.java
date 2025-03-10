/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class GetEmployerRevisionSummaryByNumberResponse {
    
    public String contentType;
    public GetEmployerRevisionSummaryByNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * The employer summary object.
     */
    
    public Object employerSummary;
    public GetEmployerRevisionSummaryByNumberResponse withEmployerSummary(Object employerSummary) {
        this.employerSummary = employerSummary;
        return this;
    }
    
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.ErrorModel errorModel;
    public GetEmployerRevisionSummaryByNumberResponse withErrorModel(org.openapis.openapi.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    
    
    public Integer statusCode;
    public GetEmployerRevisionSummaryByNumberResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public GetEmployerRevisionSummaryByNumberResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
