/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DialogflowProjectsLocationsConversationsParticipantsCreateResponse {
    
    public String contentType;

    public DialogflowProjectsLocationsConversationsParticipantsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Participant googleCloudDialogflowV2Participant;

    public DialogflowProjectsLocationsConversationsParticipantsCreateResponse withGoogleCloudDialogflowV2Participant(org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Participant googleCloudDialogflowV2Participant) {
        this.googleCloudDialogflowV2Participant = googleCloudDialogflowV2Participant;
        return this;
    }
    
    
    public Integer statusCode;

    public DialogflowProjectsLocationsConversationsParticipantsCreateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DialogflowProjectsLocationsConversationsParticipantsCreateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DialogflowProjectsLocationsConversationsParticipantsCreateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
