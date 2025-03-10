/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class CreateValidationRequestResponse {
    
    public String contentType;
    public CreateValidationRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public CreateValidationRequestResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public CreateValidationRequestResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Created
     */
    
    public org.openapis.openapi.models.shared.ApiV2010AccountValidationRequest apiV2010AccountValidationRequest;
    public CreateValidationRequestResponse withApiV2010AccountValidationRequest(org.openapis.openapi.models.shared.ApiV2010AccountValidationRequest apiV2010AccountValidationRequest) {
        this.apiV2010AccountValidationRequest = apiV2010AccountValidationRequest;
        return this;
    }
    
}
