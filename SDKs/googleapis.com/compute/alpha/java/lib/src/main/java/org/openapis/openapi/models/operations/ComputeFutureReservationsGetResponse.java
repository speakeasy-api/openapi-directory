/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ComputeFutureReservationsGetResponse {
    
    public String contentType;

    public ComputeFutureReservationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.FutureReservation futureReservation;

    public ComputeFutureReservationsGetResponse withFutureReservation(org.openapis.openapi.models.shared.FutureReservation futureReservation) {
        this.futureReservation = futureReservation;
        return this;
    }
    
    
    public Integer statusCode;

    public ComputeFutureReservationsGetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ComputeFutureReservationsGetResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ComputeFutureReservationsGetResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
