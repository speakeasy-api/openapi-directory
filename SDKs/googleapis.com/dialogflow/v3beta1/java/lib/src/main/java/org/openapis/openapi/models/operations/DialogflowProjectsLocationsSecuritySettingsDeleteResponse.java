/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DialogflowProjectsLocationsSecuritySettingsDeleteResponse {
    
    public String contentType;

    public DialogflowProjectsLocationsSecuritySettingsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public java.util.Map<String, Object> googleProtobufEmpty;

    public DialogflowProjectsLocationsSecuritySettingsDeleteResponse withGoogleProtobufEmpty(java.util.Map<String, Object> googleProtobufEmpty) {
        this.googleProtobufEmpty = googleProtobufEmpty;
        return this;
    }
    
    
    public Integer statusCode;

    public DialogflowProjectsLocationsSecuritySettingsDeleteResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DialogflowProjectsLocationsSecuritySettingsDeleteResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DialogflowProjectsLocationsSecuritySettingsDeleteResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
