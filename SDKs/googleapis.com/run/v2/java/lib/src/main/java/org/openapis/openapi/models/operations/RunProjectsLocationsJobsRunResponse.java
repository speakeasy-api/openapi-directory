/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class RunProjectsLocationsJobsRunResponse {
    
    public String contentType;

    public RunProjectsLocationsJobsRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.GoogleLongrunningOperation googleLongrunningOperation;

    public RunProjectsLocationsJobsRunResponse withGoogleLongrunningOperation(org.openapis.openapi.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    
    
    public Integer statusCode;

    public RunProjectsLocationsJobsRunResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public RunProjectsLocationsJobsRunResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public RunProjectsLocationsJobsRunResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
