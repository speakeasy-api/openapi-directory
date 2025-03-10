/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class GetPayRunJobsResponse {
    
    public String contentType;
    public GetPayRunJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.ErrorModel errorModel;
    public GetPayRunJobsResponse withErrorModel(org.openapis.openapi.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    
    /**
     * The link collection object.
     */
    
    public org.openapis.openapi.models.shared.LinkCollection linkCollection;
    public GetPayRunJobsResponse withLinkCollection(org.openapis.openapi.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    
    
    public Integer statusCode;
    public GetPayRunJobsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public GetPayRunJobsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
