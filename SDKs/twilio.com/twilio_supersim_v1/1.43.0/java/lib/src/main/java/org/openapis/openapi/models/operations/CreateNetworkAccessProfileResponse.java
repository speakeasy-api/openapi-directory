/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateNetworkAccessProfileResponse {
    
    public String contentType;

    public CreateNetworkAccessProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateNetworkAccessProfileResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateNetworkAccessProfileResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Created
     */
    
    public org.openapis.openapi.models.shared.SupersimV1NetworkAccessProfile supersimV1NetworkAccessProfile;

    public CreateNetworkAccessProfileResponse withSupersimV1NetworkAccessProfile(org.openapis.openapi.models.shared.SupersimV1NetworkAccessProfile supersimV1NetworkAccessProfile) {
        this.supersimV1NetworkAccessProfile = supersimV1NetworkAccessProfile;
        return this;
    }
    
    public CreateNetworkAccessProfileResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
