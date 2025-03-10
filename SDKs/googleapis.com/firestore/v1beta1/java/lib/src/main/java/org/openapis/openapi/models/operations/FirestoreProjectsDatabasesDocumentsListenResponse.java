/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class FirestoreProjectsDatabasesDocumentsListenResponse {
    
    public String contentType;

    public FirestoreProjectsDatabasesDocumentsListenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ListenResponse listenResponse;

    public FirestoreProjectsDatabasesDocumentsListenResponse withListenResponse(org.openapis.openapi.models.shared.ListenResponse listenResponse) {
        this.listenResponse = listenResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public FirestoreProjectsDatabasesDocumentsListenResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public FirestoreProjectsDatabasesDocumentsListenResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public FirestoreProjectsDatabasesDocumentsListenResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
