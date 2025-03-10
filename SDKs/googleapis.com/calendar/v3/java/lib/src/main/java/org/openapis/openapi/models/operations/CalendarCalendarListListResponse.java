/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CalendarCalendarListListResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.CalendarList calendarList;

    public CalendarCalendarListListResponse withCalendarList(org.openapis.openapi.models.shared.CalendarList calendarList) {
        this.calendarList = calendarList;
        return this;
    }
    
    
    public String contentType;

    public CalendarCalendarListListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public CalendarCalendarListListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CalendarCalendarListListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CalendarCalendarListListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
