/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ReposGetWebhookConfigForRepoResponse {
    
    public String contentType;

    public ReposGetWebhookConfigForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ReposGetWebhookConfigForRepoResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ReposGetWebhookConfigForRepoResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.WebhookConfig webhookConfig;

    public ReposGetWebhookConfigForRepoResponse withWebhookConfig(org.openapis.openapi.models.shared.WebhookConfig webhookConfig) {
        this.webhookConfig = webhookConfig;
        return this;
    }
    
    public ReposGetWebhookConfigForRepoResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
