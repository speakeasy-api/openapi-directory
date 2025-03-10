/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class MonitoringProjectsLocationPrometheusApiV1QueryResponse {
    
    public String contentType;

    public MonitoringProjectsLocationPrometheusApiV1QueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.HttpBody httpBody;

    public MonitoringProjectsLocationPrometheusApiV1QueryResponse withHttpBody(org.openapis.openapi.models.shared.HttpBody httpBody) {
        this.httpBody = httpBody;
        return this;
    }
    
    
    public Integer statusCode;

    public MonitoringProjectsLocationPrometheusApiV1QueryResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public MonitoringProjectsLocationPrometheusApiV1QueryResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public MonitoringProjectsLocationPrometheusApiV1QueryResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
