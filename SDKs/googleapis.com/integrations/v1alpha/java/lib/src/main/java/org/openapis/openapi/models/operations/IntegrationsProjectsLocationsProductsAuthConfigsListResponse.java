/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class IntegrationsProjectsLocationsProductsAuthConfigsListResponse {
    
    public String contentType;

    public IntegrationsProjectsLocationsProductsAuthConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaListAuthConfigsResponse googleCloudIntegrationsV1alphaListAuthConfigsResponse;

    public IntegrationsProjectsLocationsProductsAuthConfigsListResponse withGoogleCloudIntegrationsV1alphaListAuthConfigsResponse(org.openapis.openapi.models.shared.GoogleCloudIntegrationsV1alphaListAuthConfigsResponse googleCloudIntegrationsV1alphaListAuthConfigsResponse) {
        this.googleCloudIntegrationsV1alphaListAuthConfigsResponse = googleCloudIntegrationsV1alphaListAuthConfigsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public IntegrationsProjectsLocationsProductsAuthConfigsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public IntegrationsProjectsLocationsProductsAuthConfigsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public IntegrationsProjectsLocationsProductsAuthConfigsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
