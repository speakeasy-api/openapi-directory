/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class SubclassificationFullBatchResponse {
    /**
     * A list of classified names at a sub-country level.
     */
    
    public org.openapis.openapi.models.shared.BatchPersonalNameGeoSubclassificationOut batchPersonalNameGeoSubclassificationOut;

    public SubclassificationFullBatchResponse withBatchPersonalNameGeoSubclassificationOut(org.openapis.openapi.models.shared.BatchPersonalNameGeoSubclassificationOut batchPersonalNameGeoSubclassificationOut) {
        this.batchPersonalNameGeoSubclassificationOut = batchPersonalNameGeoSubclassificationOut;
        return this;
    }
    
    
    public String contentType;

    public SubclassificationFullBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public SubclassificationFullBatchResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public SubclassificationFullBatchResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public SubclassificationFullBatchResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
