/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class ListCredentialResponse {
    
    public String contentType;
    public ListCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public ListCredentialListCredentialResponse listCredentialResponse;
    public ListCredentialResponse withListCredentialResponse(ListCredentialListCredentialResponse listCredentialResponse) {
        this.listCredentialResponse = listCredentialResponse;
        return this;
    }
    
    
    public Integer statusCode;
    public ListCredentialResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public ListCredentialResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
