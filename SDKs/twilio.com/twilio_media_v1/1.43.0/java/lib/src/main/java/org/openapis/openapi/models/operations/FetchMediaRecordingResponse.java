/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class FetchMediaRecordingResponse {
    
    public String contentType;

    public FetchMediaRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public FetchMediaRecordingResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public FetchMediaRecordingResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.MediaV1MediaRecording mediaV1MediaRecording;

    public FetchMediaRecordingResponse withMediaV1MediaRecording(org.openapis.openapi.models.shared.MediaV1MediaRecording mediaV1MediaRecording) {
        this.mediaV1MediaRecording = mediaV1MediaRecording;
        return this;
    }
    
    public FetchMediaRecordingResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
