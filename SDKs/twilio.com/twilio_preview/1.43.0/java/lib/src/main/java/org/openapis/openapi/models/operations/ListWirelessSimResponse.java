/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListWirelessSimResponse {
    
    public String contentType;

    public ListWirelessSimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public ListWirelessSimListWirelessSimResponse listWirelessSimResponse;

    public ListWirelessSimResponse withListWirelessSimResponse(ListWirelessSimListWirelessSimResponse listWirelessSimResponse) {
        this.listWirelessSimResponse = listWirelessSimResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ListWirelessSimResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListWirelessSimResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ListWirelessSimResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
