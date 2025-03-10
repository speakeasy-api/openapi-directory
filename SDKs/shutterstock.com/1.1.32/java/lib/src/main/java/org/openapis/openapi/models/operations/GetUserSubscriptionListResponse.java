/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetUserSubscriptionListResponse {
    
    public String contentType;

    public GetUserSubscriptionListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetUserSubscriptionListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetUserSubscriptionListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.SubscriptionDataList subscriptionDataList;

    public GetUserSubscriptionListResponse withSubscriptionDataList(org.openapis.openapi.models.shared.SubscriptionDataList subscriptionDataList) {
        this.subscriptionDataList = subscriptionDataList;
        return this;
    }
    
    public GetUserSubscriptionListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
