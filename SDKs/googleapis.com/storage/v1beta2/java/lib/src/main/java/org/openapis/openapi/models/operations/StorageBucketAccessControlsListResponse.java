/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class StorageBucketAccessControlsListResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.BucketAccessControls bucketAccessControls;

    public StorageBucketAccessControlsListResponse withBucketAccessControls(org.openapis.openapi.models.shared.BucketAccessControls bucketAccessControls) {
        this.bucketAccessControls = bucketAccessControls;
        return this;
    }
    
    
    public String contentType;

    public StorageBucketAccessControlsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public StorageBucketAccessControlsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public StorageBucketAccessControlsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public StorageBucketAccessControlsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
