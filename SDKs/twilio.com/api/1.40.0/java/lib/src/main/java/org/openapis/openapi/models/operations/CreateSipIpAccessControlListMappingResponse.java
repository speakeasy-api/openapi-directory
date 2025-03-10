/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class CreateSipIpAccessControlListMappingResponse {
    
    public String contentType;
    public CreateSipIpAccessControlListMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public CreateSipIpAccessControlListMappingResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public CreateSipIpAccessControlListMappingResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Created
     */
    
    public org.openapis.openapi.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping apiV2010AccountSipSipDomainSipIpAccessControlListMapping;
    public CreateSipIpAccessControlListMappingResponse withApiV2010AccountSipSipDomainSipIpAccessControlListMapping(org.openapis.openapi.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping apiV2010AccountSipSipDomainSipIpAccessControlListMapping) {
        this.apiV2010AccountSipSipDomainSipIpAccessControlListMapping = apiV2010AccountSipSipDomainSipIpAccessControlListMapping;
        return this;
    }
    
}
