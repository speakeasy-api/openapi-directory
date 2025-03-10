/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse {
    
    public String contentType;

    public IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse googleCloudIntegrationsV1alphaListExecutionsResponse;

    public IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse withGoogleCloudIntegrationsV1alphaListExecutionsResponse(org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse googleCloudIntegrationsV1alphaListExecutionsResponse) {
        this.googleCloudIntegrationsV1alphaListExecutionsResponse = googleCloudIntegrationsV1alphaListExecutionsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
