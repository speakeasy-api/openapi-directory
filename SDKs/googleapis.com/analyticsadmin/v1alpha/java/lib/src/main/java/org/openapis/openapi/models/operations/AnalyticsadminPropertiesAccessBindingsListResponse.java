/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AnalyticsadminPropertiesAccessBindingsListResponse {
    
    public String contentType;

    public AnalyticsadminPropertiesAccessBindingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaListAccessBindingsResponse googleAnalyticsAdminV1alphaListAccessBindingsResponse;

    public AnalyticsadminPropertiesAccessBindingsListResponse withGoogleAnalyticsAdminV1alphaListAccessBindingsResponse(org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaListAccessBindingsResponse googleAnalyticsAdminV1alphaListAccessBindingsResponse) {
        this.googleAnalyticsAdminV1alphaListAccessBindingsResponse = googleAnalyticsAdminV1alphaListAccessBindingsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public AnalyticsadminPropertiesAccessBindingsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AnalyticsadminPropertiesAccessBindingsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public AnalyticsadminPropertiesAccessBindingsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
