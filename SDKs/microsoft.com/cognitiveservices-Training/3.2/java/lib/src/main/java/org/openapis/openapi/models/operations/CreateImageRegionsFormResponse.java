/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateImageRegionsFormResponse {
    
    public byte[] body;

    public CreateImageRegionsFormResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public CreateImageRegionsFormResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Error response
     */
    
    public org.openapis.openapi.models.shared.CustomVisionError customVisionError;

    public CreateImageRegionsFormResponse withCustomVisionError(org.openapis.openapi.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.ImageRegionCreateSummary imageRegionCreateSummary;

    public CreateImageRegionsFormResponse withImageRegionCreateSummary(org.openapis.openapi.models.shared.ImageRegionCreateSummary imageRegionCreateSummary) {
        this.imageRegionCreateSummary = imageRegionCreateSummary;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateImageRegionsFormResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateImageRegionsFormResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CreateImageRegionsFormResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
