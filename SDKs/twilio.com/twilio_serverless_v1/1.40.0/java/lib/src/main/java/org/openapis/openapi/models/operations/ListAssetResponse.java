/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class ListAssetResponse {
    
    public String contentType;
    public ListAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public ListAssetListAssetResponse listAssetResponse;
    public ListAssetResponse withListAssetResponse(ListAssetListAssetResponse listAssetResponse) {
        this.listAssetResponse = listAssetResponse;
        return this;
    }
    
    
    public Integer statusCode;
    public ListAssetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public ListAssetResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
