/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AsyncVRPResponse {
    /**
     * Error occurred when reading client request. Request is invalid.
     */
    
    public org.openapis.openapi.models.shared.BadRequest badRequest;

    public AsyncVRPResponse withBadRequest(org.openapis.openapi.models.shared.BadRequest badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    
    
    public String contentType;

    public AsyncVRPResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public AsyncVRPResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    /**
     * Error occurred on server side.
     */
    
    public org.openapis.openapi.models.shared.InternalErrorMessage internalErrorMessage;

    public AsyncVRPResponse withInternalErrorMessage(org.openapis.openapi.models.shared.InternalErrorMessage internalErrorMessage) {
        this.internalErrorMessage = internalErrorMessage;
        return this;
    }
    
    /**
     * A jobId you can use to retrieve your solution from the server - see solution endpoint.
     */
    
    public org.openapis.openapi.models.shared.JobId jobId;

    public AsyncVRPResponse withJobId(org.openapis.openapi.models.shared.JobId jobId) {
        this.jobId = jobId;
        return this;
    }
    
    
    public Integer statusCode;

    public AsyncVRPResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AsyncVRPResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public AsyncVRPResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
