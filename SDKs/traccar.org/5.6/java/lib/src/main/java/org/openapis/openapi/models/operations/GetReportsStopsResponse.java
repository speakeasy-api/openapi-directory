/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetReportsStopsResponse {
    
    public byte[] body;

    public GetReportsStopsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public GetReportsStopsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.ReportStops[] reportStops;

    public GetReportsStopsResponse withReportStops(org.openapis.openapi.models.shared.ReportStops[] reportStops) {
        this.reportStops = reportStops;
        return this;
    }
    
    
    public Integer statusCode;

    public GetReportsStopsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetReportsStopsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetReportsStopsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
