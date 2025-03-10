/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateRecordingSettingsResponse {
    
    public String contentType;

    public CreateRecordingSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateRecordingSettingsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateRecordingSettingsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Created
     */
    
    public org.openapis.openapi.models.shared.VideoV1RecordingSettings videoV1RecordingSettings;

    public CreateRecordingSettingsResponse withVideoV1RecordingSettings(org.openapis.openapi.models.shared.VideoV1RecordingSettings videoV1RecordingSettings) {
        this.videoV1RecordingSettings = videoV1RecordingSettings;
        return this;
    }
    
    public CreateRecordingSettingsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
