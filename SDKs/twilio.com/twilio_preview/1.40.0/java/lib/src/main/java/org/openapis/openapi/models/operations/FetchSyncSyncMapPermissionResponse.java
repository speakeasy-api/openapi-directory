/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class FetchSyncSyncMapPermissionResponse {
    
    public String contentType;
    public FetchSyncSyncMapPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public FetchSyncSyncMapPermissionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public FetchSyncSyncMapPermissionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.PreviewSyncServiceSyncMapSyncMapPermission previewSyncServiceSyncMapSyncMapPermission;
    public FetchSyncSyncMapPermissionResponse withPreviewSyncServiceSyncMapSyncMapPermission(org.openapis.openapi.models.shared.PreviewSyncServiceSyncMapSyncMapPermission previewSyncServiceSyncMapSyncMapPermission) {
        this.previewSyncServiceSyncMapSyncMapPermission = previewSyncServiceSyncMapSyncMapPermission;
        return this;
    }
    
}
