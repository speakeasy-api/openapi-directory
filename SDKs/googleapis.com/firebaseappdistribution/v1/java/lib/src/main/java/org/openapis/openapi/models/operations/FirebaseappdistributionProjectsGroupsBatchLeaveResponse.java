/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class FirebaseappdistributionProjectsGroupsBatchLeaveResponse {
    
    public String contentType;

    public FirebaseappdistributionProjectsGroupsBatchLeaveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public java.util.Map<String, Object> googleProtobufEmpty;

    public FirebaseappdistributionProjectsGroupsBatchLeaveResponse withGoogleProtobufEmpty(java.util.Map<String, Object> googleProtobufEmpty) {
        this.googleProtobufEmpty = googleProtobufEmpty;
        return this;
    }
    
    
    public Integer statusCode;

    public FirebaseappdistributionProjectsGroupsBatchLeaveResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public FirebaseappdistributionProjectsGroupsBatchLeaveResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public FirebaseappdistributionProjectsGroupsBatchLeaveResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
