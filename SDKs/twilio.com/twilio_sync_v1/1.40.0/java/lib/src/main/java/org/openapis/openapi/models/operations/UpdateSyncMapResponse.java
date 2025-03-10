/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class UpdateSyncMapResponse {
    
    public String contentType;
    public UpdateSyncMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public UpdateSyncMapResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public UpdateSyncMapResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.SyncV1ServiceSyncMap syncV1ServiceSyncMap;
    public UpdateSyncMapResponse withSyncV1ServiceSyncMap(org.openapis.openapi.models.shared.SyncV1ServiceSyncMap syncV1ServiceSyncMap) {
        this.syncV1ServiceSyncMap = syncV1ServiceSyncMap;
        return this;
    }
    
}
