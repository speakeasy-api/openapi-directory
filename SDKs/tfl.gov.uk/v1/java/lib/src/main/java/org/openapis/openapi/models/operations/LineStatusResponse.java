/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class LineStatusResponse {
    
    public byte[] body;

    public LineStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public LineStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public LineStatusResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public LineStatusResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.TflApiPresentationEntitiesLine[] tflApiPresentationEntitiesLines;

    public LineStatusResponse withTflApiPresentationEntitiesLines(org.openapis.openapi.models.shared.TflApiPresentationEntitiesLine[] tflApiPresentationEntitiesLines) {
        this.tflApiPresentationEntitiesLines = tflApiPresentationEntitiesLines;
        return this;
    }
    
    public LineStatusResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
