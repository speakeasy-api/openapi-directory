/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class FetchMemberResponse {
    
    public String contentType;

    public FetchMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public FetchMemberResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public FetchMemberResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.ApiV2010AccountQueueMember apiV2010AccountQueueMember;

    public FetchMemberResponse withApiV2010AccountQueueMember(org.openapis.openapi.models.shared.ApiV2010AccountQueueMember apiV2010AccountQueueMember) {
        this.apiV2010AccountQueueMember = apiV2010AccountQueueMember;
        return this;
    }
    
    public FetchMemberResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
