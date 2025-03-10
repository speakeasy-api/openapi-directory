/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class ListServiceResponse {
    
    public String contentType;
    public ListServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public ListServiceListServiceResponse listServiceResponse;
    public ListServiceResponse withListServiceResponse(ListServiceListServiceResponse listServiceResponse) {
        this.listServiceResponse = listServiceResponse;
        return this;
    }
    
    
    public Integer statusCode;
    public ListServiceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public ListServiceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
