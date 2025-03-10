/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListRoomParticipantResponse {
    
    public String contentType;

    public ListRoomParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public ListRoomParticipantListRoomParticipantResponse listRoomParticipantResponse;

    public ListRoomParticipantResponse withListRoomParticipantResponse(ListRoomParticipantListRoomParticipantResponse listRoomParticipantResponse) {
        this.listRoomParticipantResponse = listRoomParticipantResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ListRoomParticipantResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListRoomParticipantResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ListRoomParticipantResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
