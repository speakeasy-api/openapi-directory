/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class ListPayeesV3Response {
    
    public String contentType;
    public ListPayeesV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Details of Payee
     */
    
    public org.openapis.openapi.models.shared.PagedPayeeResponseV3 pagedPayeeResponseV3;
    public ListPayeesV3Response withPagedPayeeResponseV3(org.openapis.openapi.models.shared.PagedPayeeResponseV3 pagedPayeeResponseV3) {
        this.pagedPayeeResponseV3 = pagedPayeeResponseV3;
        return this;
    }
    
    
    public Integer statusCode;
    public ListPayeesV3Response withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public ListPayeesV3Response withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Invalid request. See Error message payload for details of failure
     */
    
    public org.openapis.openapi.models.shared.InlineResponse400 inlineResponse400;
    public ListPayeesV3Response withInlineResponse400(org.openapis.openapi.models.shared.InlineResponse400 inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    
    /**
     * Invalid access token. May be expired or invalid
     */
    
    public org.openapis.openapi.models.shared.InlineResponse401 inlineResponse401;
    public ListPayeesV3Response withInlineResponse401(org.openapis.openapi.models.shared.InlineResponse401 inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    
    /**
     * The authentication does not have permissions to access the resource
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     * 
     */
    
    public org.openapis.openapi.models.shared.InlineResponse403 inlineResponse403;
    public ListPayeesV3Response withInlineResponse403(org.openapis.openapi.models.shared.InlineResponse403 inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    
    /**
     * The resource was not found or is no longer available
     * 
     */
    
    public org.openapis.openapi.models.shared.InlineResponse404 inlineResponse404;
    public ListPayeesV3Response withInlineResponse404(org.openapis.openapi.models.shared.InlineResponse404 inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
    
}
