/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ReposListDeployKeysResponse {
    
    public String contentType;

    public ReposListDeployKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public ReposListDeployKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public ReposListDeployKeysResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ReposListDeployKeysResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.DeployKey[] deployKeys;

    public ReposListDeployKeysResponse withDeployKeys(org.openapis.openapi.models.shared.DeployKey[] deployKeys) {
        this.deployKeys = deployKeys;
        return this;
    }
    
    public ReposListDeployKeysResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
