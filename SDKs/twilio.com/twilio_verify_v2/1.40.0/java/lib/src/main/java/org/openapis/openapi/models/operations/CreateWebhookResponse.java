/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class CreateWebhookResponse {
    
    public String contentType;
    public CreateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public CreateWebhookResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public CreateWebhookResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Created
     */
    
    public org.openapis.openapi.models.shared.VerifyV2ServiceWebhook verifyV2ServiceWebhook;
    public CreateWebhookResponse withVerifyV2ServiceWebhook(org.openapis.openapi.models.shared.VerifyV2ServiceWebhook verifyV2ServiceWebhook) {
        this.verifyV2ServiceWebhook = verifyV2ServiceWebhook;
        return this;
    }
    
}
