/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class GetOrganizationDevicesUplinksAddressesByDeviceResponse {
    
    public String contentType;
    public GetOrganizationDevicesUplinksAddressesByDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;
    public GetOrganizationDevicesUplinksAddressesByDeviceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;
    public GetOrganizationDevicesUplinksAddressesByDeviceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public GetOrganizationDevicesUplinksAddressesByDeviceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSON[] getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects;
    public GetOrganizationDevicesUplinksAddressesByDeviceResponse withGetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects(GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSON[] getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects) {
        this.getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects = getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects;
        return this;
    }
    
}
