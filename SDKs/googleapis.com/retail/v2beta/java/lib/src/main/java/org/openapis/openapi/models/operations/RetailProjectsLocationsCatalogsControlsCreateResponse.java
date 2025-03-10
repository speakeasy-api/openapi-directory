/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class RetailProjectsLocationsCatalogsControlsCreateResponse {
    
    public String contentType;

    public RetailProjectsLocationsCatalogsControlsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.GoogleCloudRetailV2betaControl googleCloudRetailV2betaControl;

    public RetailProjectsLocationsCatalogsControlsCreateResponse withGoogleCloudRetailV2betaControl(org.openapis.openapi.models.shared.GoogleCloudRetailV2betaControl googleCloudRetailV2betaControl) {
        this.googleCloudRetailV2betaControl = googleCloudRetailV2betaControl;
        return this;
    }
    
    
    public Integer statusCode;

    public RetailProjectsLocationsCatalogsControlsCreateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public RetailProjectsLocationsCatalogsControlsCreateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public RetailProjectsLocationsCatalogsControlsCreateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
