/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DisplayvideoAdvertisersManualTriggersListResponse {
    
    public String contentType;

    public DisplayvideoAdvertisersManualTriggersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListManualTriggersResponse listManualTriggersResponse;

    public DisplayvideoAdvertisersManualTriggersListResponse withListManualTriggersResponse(org.openapis.openapi.models.shared.ListManualTriggersResponse listManualTriggersResponse) {
        this.listManualTriggersResponse = listManualTriggersResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public DisplayvideoAdvertisersManualTriggersListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DisplayvideoAdvertisersManualTriggersListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DisplayvideoAdvertisersManualTriggersListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
