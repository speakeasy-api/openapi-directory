/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class StadiumsResponse {
    
    public String contentType;

    public StadiumsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public org.openapis.openapi.models.shared.Stadium[] stadiums;

    public StadiumsResponse withStadiums(org.openapis.openapi.models.shared.Stadium[] stadiums) {
        this.stadiums = stadiums;
        return this;
    }
    
    
    public Integer statusCode;

    public StadiumsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public StadiumsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public StadiumsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
