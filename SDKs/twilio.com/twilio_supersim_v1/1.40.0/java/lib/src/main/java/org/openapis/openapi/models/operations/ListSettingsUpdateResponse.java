/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class ListSettingsUpdateResponse {
    
    public String contentType;
    public ListSettingsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public ListSettingsUpdateListSettingsUpdateResponse listSettingsUpdateResponse;
    public ListSettingsUpdateResponse withListSettingsUpdateResponse(ListSettingsUpdateListSettingsUpdateResponse listSettingsUpdateResponse) {
        this.listSettingsUpdateResponse = listSettingsUpdateResponse;
        return this;
    }
    
    
    public Integer statusCode;
    public ListSettingsUpdateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public ListSettingsUpdateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
