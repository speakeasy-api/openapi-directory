/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class FetchServiceResponse {
    
    public String contentType;
    public FetchServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public FetchServiceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public FetchServiceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.ServerlessV1Service serverlessV1Service;
    public FetchServiceResponse withServerlessV1Service(org.openapis.openapi.models.shared.ServerlessV1Service serverlessV1Service) {
        this.serverlessV1Service = serverlessV1Service;
        return this;
    }
    
}
