/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReposUpdateWebhookRequestBodyConfig - Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-hook-config-params).
 */
public class ReposUpdateWebhookRequestBodyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;

    public ReposUpdateWebhookRequestBodyConfig withAddress(String address) {
        this.address = address;
        return this;
    }
    
    /**
     * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;

    public ReposUpdateWebhookRequestBodyConfig withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insecure_ssl")
    public Object insecureSsl;

    public ReposUpdateWebhookRequestBodyConfig withInsecureSsl(Object insecureSsl) {
        this.insecureSsl = insecureSsl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room")
    public String room;

    public ReposUpdateWebhookRequestBodyConfig withRoom(String room) {
        this.room = room;
        return this;
    }
    
    /**
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-server@3.0/webhooks/event-payloads/#delivery-headers).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;

    public ReposUpdateWebhookRequestBodyConfig withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    
    /**
     * The URL to which the payloads will be delivered.
     */
    @JsonProperty("url")
    public String url;

    public ReposUpdateWebhookRequestBodyConfig withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public ReposUpdateWebhookRequestBodyConfig(@JsonProperty("url") String url) {
        this.url = url;
  }
}
