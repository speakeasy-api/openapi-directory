/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetFeaturedVideoCollectionResponse {
    
    public String contentType;

    public GetFeaturedVideoCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.FeaturedCollection featuredCollection;

    public GetFeaturedVideoCollectionResponse withFeaturedCollection(org.openapis.openapi.models.shared.FeaturedCollection featuredCollection) {
        this.featuredCollection = featuredCollection;
        return this;
    }
    
    
    public Integer statusCode;

    public GetFeaturedVideoCollectionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetFeaturedVideoCollectionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetFeaturedVideoCollectionResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
