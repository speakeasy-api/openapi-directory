/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class TranscoderProjectsLocationsJobTemplatesCreateResponse {
    
    public String contentType;

    public TranscoderProjectsLocationsJobTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.JobTemplate jobTemplate;

    public TranscoderProjectsLocationsJobTemplatesCreateResponse withJobTemplate(org.openapis.openapi.models.shared.JobTemplate jobTemplate) {
        this.jobTemplate = jobTemplate;
        return this;
    }
    
    
    public Integer statusCode;

    public TranscoderProjectsLocationsJobTemplatesCreateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public TranscoderProjectsLocationsJobTemplatesCreateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public TranscoderProjectsLocationsJobTemplatesCreateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
