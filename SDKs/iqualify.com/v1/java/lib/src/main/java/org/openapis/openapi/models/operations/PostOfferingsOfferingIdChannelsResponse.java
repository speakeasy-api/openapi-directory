/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PostOfferingsOfferingIdChannelsResponse {
    /**
     * channel successfully added
     */
    
    public org.openapis.openapi.models.shared.ChannelResponse channelResponse;

    public PostOfferingsOfferingIdChannelsResponse withChannelResponse(org.openapis.openapi.models.shared.ChannelResponse channelResponse) {
        this.channelResponse = channelResponse;
        return this;
    }
    
    
    public String contentType;

    public PostOfferingsOfferingIdChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.Error error;

    public PostOfferingsOfferingIdChannelsResponse withError(org.openapis.openapi.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    
    public Integer statusCode;

    public PostOfferingsOfferingIdChannelsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PostOfferingsOfferingIdChannelsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PostOfferingsOfferingIdChannelsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
