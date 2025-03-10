/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class GetTagFromEmployeeRevisionResponse {
    
    public String contentType;
    public GetTagFromEmployeeRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.ErrorModel errorModel;
    public GetTagFromEmployeeRevisionResponse withErrorModel(org.openapis.openapi.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    
    
    public Integer statusCode;
    public GetTagFromEmployeeRevisionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public GetTagFromEmployeeRevisionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * The tag object.
     */
    
    public org.openapis.openapi.models.shared.Tag tag;
    public GetTagFromEmployeeRevisionResponse withTag(org.openapis.openapi.models.shared.Tag tag) {
        this.tag = tag;
        return this;
    }
    
}
