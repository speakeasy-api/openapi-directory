/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UpdateWirelessRatePlanResponse {
    
    public String contentType;

    public UpdateWirelessRatePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public UpdateWirelessRatePlanResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UpdateWirelessRatePlanResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.PreviewWirelessRatePlan previewWirelessRatePlan;

    public UpdateWirelessRatePlanResponse withPreviewWirelessRatePlan(org.openapis.openapi.models.shared.PreviewWirelessRatePlan previewWirelessRatePlan) {
        this.previewWirelessRatePlan = previewWirelessRatePlan;
        return this;
    }
    
    public UpdateWirelessRatePlanResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
