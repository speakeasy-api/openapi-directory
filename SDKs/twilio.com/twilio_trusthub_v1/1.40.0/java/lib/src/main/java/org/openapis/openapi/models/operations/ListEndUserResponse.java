/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class ListEndUserResponse {
    
    public String contentType;
    public ListEndUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public ListEndUserListEndUserResponse listEndUserResponse;
    public ListEndUserResponse withListEndUserResponse(ListEndUserListEndUserResponse listEndUserResponse) {
        this.listEndUserResponse = listEndUserResponse;
        return this;
    }
    
    
    public Integer statusCode;
    public ListEndUserResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public ListEndUserResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
