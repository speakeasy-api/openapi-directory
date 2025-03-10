/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class StandingsResponse {
    
    public String contentType;

    public StandingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public org.openapis.openapi.models.shared.Standing[] standings;

    public StandingsResponse withStandings(org.openapis.openapi.models.shared.Standing[] standings) {
        this.standings = standings;
        return this;
    }
    
    
    public Integer statusCode;

    public StandingsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public StandingsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public StandingsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
