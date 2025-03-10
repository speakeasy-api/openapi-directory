/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class ListDialingPermissionsCountryResponse {
    
    public String contentType;
    public ListDialingPermissionsCountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public ListDialingPermissionsCountryListDialingPermissionsCountryResponse listDialingPermissionsCountryResponse;
    public ListDialingPermissionsCountryResponse withListDialingPermissionsCountryResponse(ListDialingPermissionsCountryListDialingPermissionsCountryResponse listDialingPermissionsCountryResponse) {
        this.listDialingPermissionsCountryResponse = listDialingPermissionsCountryResponse;
        return this;
    }
    
    
    public Integer statusCode;
    public ListDialingPermissionsCountryResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public ListDialingPermissionsCountryResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
