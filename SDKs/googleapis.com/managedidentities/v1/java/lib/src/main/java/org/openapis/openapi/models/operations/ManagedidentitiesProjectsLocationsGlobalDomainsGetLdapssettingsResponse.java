/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse {
    
    public String contentType;

    public ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.LDAPSSettings ldapsSettings;

    public ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse withLDAPSSettings(org.openapis.openapi.models.shared.LDAPSSettings ldapsSettings) {
        this.ldapsSettings = ldapsSettings;
        return this;
    }
    
    
    public Integer statusCode;

    public ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
