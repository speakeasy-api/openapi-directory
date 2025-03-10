/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class StartImportJobResponse {
    
    public String contentType;

    public StartImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Started ImportJob
     */
    
    public org.openapis.openapi.models.shared.ImportJob importJob;

    public StartImportJobResponse withImportJob(org.openapis.openapi.models.shared.ImportJob importJob) {
        this.importJob = importJob;
        return this;
    }
    
    
    public Integer statusCode;

    public StartImportJobResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public StartImportJobResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public StartImportJobResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
