/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DiaryControllerPutAppointmentJsonResponse {
    
    public String contentType;

    public DiaryControllerPutAppointmentJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public String diaryControllerPutAppointmentJSON200ApplicationJSONString;

    public DiaryControllerPutAppointmentJsonResponse withDiaryControllerPutAppointmentJSON200ApplicationJSONString(String diaryControllerPutAppointmentJSON200ApplicationJSONString) {
        this.diaryControllerPutAppointmentJSON200ApplicationJSONString = diaryControllerPutAppointmentJSON200ApplicationJSONString;
        return this;
    }
    
    /**
     * OK
     */
    
    public String diaryControllerPutAppointmentJson200ApplicationXMLString;

    public DiaryControllerPutAppointmentJsonResponse withDiaryControllerPutAppointmentJson200ApplicationXMLString(String diaryControllerPutAppointmentJson200ApplicationXMLString) {
        this.diaryControllerPutAppointmentJson200ApplicationXMLString = diaryControllerPutAppointmentJson200ApplicationXMLString;
        return this;
    }
    
    /**
     * OK
     */
    
    public String diaryControllerPutAppointmentJSON200TextJSONString;

    public DiaryControllerPutAppointmentJsonResponse withDiaryControllerPutAppointmentJSON200TextJSONString(String diaryControllerPutAppointmentJSON200TextJSONString) {
        this.diaryControllerPutAppointmentJSON200TextJSONString = diaryControllerPutAppointmentJSON200TextJSONString;
        return this;
    }
    
    /**
     * OK
     */
    
    public String diaryControllerPutAppointmentJson200TextXMLString;

    public DiaryControllerPutAppointmentJsonResponse withDiaryControllerPutAppointmentJson200TextXMLString(String diaryControllerPutAppointmentJson200TextXMLString) {
        this.diaryControllerPutAppointmentJson200TextXMLString = diaryControllerPutAppointmentJson200TextXMLString;
        return this;
    }
    
    
    public Integer statusCode;

    public DiaryControllerPutAppointmentJsonResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DiaryControllerPutAppointmentJsonResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DiaryControllerPutAppointmentJsonResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
