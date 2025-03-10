/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class NetworkconnectivityProjectsLocationsSpokesPatchResponse {
    
    public String contentType;

    public NetworkconnectivityProjectsLocationsSpokesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.GoogleLongrunningOperation googleLongrunningOperation;

    public NetworkconnectivityProjectsLocationsSpokesPatchResponse withGoogleLongrunningOperation(org.openapis.openapi.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    
    
    public Integer statusCode;

    public NetworkconnectivityProjectsLocationsSpokesPatchResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public NetworkconnectivityProjectsLocationsSpokesPatchResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public NetworkconnectivityProjectsLocationsSpokesPatchResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
