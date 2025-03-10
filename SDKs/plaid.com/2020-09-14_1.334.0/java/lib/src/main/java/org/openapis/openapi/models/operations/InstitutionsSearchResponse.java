/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class InstitutionsSearchResponse {
    
    public String contentType;
    public InstitutionsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public java.util.Map<String, Object> institutionsSearchResponse;
    public InstitutionsSearchResponse withInstitutionsSearchResponse(java.util.Map<String, Object> institutionsSearchResponse) {
        this.institutionsSearchResponse = institutionsSearchResponse;
        return this;
    }
    
    /**
     * Error response
     */
    
    public java.util.Map<String, Object> plaidError;
    public InstitutionsSearchResponse withPlaidError(java.util.Map<String, Object> plaidError) {
        this.plaidError = plaidError;
        return this;
    }
    
    
    public Integer statusCode;
    public InstitutionsSearchResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public InstitutionsSearchResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
