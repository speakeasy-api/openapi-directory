/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GETGenesBySpeciesUsingGETResponse {
    
    public byte[] body;

    public GETGenesBySpeciesUsingGETResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public GETGenesBySpeciesUsingGETResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GETGenesBySpeciesUsingGETResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GETGenesBySpeciesUsingGETResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GETGenesBySpeciesUsingGETResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
