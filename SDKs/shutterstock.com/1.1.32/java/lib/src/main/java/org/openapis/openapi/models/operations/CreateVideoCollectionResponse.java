/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateVideoCollectionResponse {
    /**
     * Successfully created video collection
     */
    
    public org.openapis.openapi.models.shared.CollectionCreateResponse collectionCreateResponse;

    public CreateVideoCollectionResponse withCollectionCreateResponse(org.openapis.openapi.models.shared.CollectionCreateResponse collectionCreateResponse) {
        this.collectionCreateResponse = collectionCreateResponse;
        return this;
    }
    
    
    public String contentType;

    public CreateVideoCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateVideoCollectionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateVideoCollectionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CreateVideoCollectionResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
