/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class UpdateUnderstandTaskActionsResponse {
    
    public String contentType;
    public UpdateUnderstandTaskActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public UpdateUnderstandTaskActionsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public UpdateUnderstandTaskActionsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.PreviewUnderstandAssistantTaskTaskActions previewUnderstandAssistantTaskTaskActions;
    public UpdateUnderstandTaskActionsResponse withPreviewUnderstandAssistantTaskTaskActions(org.openapis.openapi.models.shared.PreviewUnderstandAssistantTaskTaskActions previewUnderstandAssistantTaskTaskActions) {
        this.previewUnderstandAssistantTaskTaskActions = previewUnderstandAssistantTaskTaskActions;
        return this;
    }
    
}
