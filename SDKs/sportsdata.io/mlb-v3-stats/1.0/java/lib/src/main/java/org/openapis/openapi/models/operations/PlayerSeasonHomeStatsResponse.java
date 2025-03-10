/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PlayerSeasonHomeStatsResponse {
    
    public String contentType;

    public PlayerSeasonHomeStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public org.openapis.openapi.models.shared.PlayerSeason[] playerSeasons;

    public PlayerSeasonHomeStatsResponse withPlayerSeasons(org.openapis.openapi.models.shared.PlayerSeason[] playerSeasons) {
        this.playerSeasons = playerSeasons;
        return this;
    }
    
    
    public Integer statusCode;

    public PlayerSeasonHomeStatsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PlayerSeasonHomeStatsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PlayerSeasonHomeStatsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
