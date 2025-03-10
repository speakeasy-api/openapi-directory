/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class SubmitEvidenceResponse {
    
    public String contentType;

    public SubmitEvidenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public SubmitEvidenceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public SubmitEvidenceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.SubmitEvidenceResponse submitEvidenceResponse;

    public SubmitEvidenceResponse withSubmitEvidenceResponse(org.openapis.openapi.models.shared.SubmitEvidenceResponse submitEvidenceResponse) {
        this.submitEvidenceResponse = submitEvidenceResponse;
        return this;
    }
    
    public SubmitEvidenceResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
