/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DfareportingEventTagsPatchResponse {
    
    public String contentType;

    public DfareportingEventTagsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.EventTag eventTag;

    public DfareportingEventTagsPatchResponse withEventTag(org.openapis.openapi.models.shared.EventTag eventTag) {
        this.eventTag = eventTag;
        return this;
    }
    
    
    public Integer statusCode;

    public DfareportingEventTagsPatchResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DfareportingEventTagsPatchResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DfareportingEventTagsPatchResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
