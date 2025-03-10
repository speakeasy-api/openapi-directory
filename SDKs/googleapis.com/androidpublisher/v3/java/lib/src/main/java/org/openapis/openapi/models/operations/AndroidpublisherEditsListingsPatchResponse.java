/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AndroidpublisherEditsListingsPatchResponse {
    
    public String contentType;

    public AndroidpublisherEditsListingsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.Listing listing;

    public AndroidpublisherEditsListingsPatchResponse withListing(org.openapis.openapi.models.shared.Listing listing) {
        this.listing = listing;
        return this;
    }
    
    
    public Integer statusCode;

    public AndroidpublisherEditsListingsPatchResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AndroidpublisherEditsListingsPatchResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public AndroidpublisherEditsListingsPatchResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
