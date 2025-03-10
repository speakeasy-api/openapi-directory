/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNetworkWebhooksHttpServer200ApplicationJSON - Successful operation
 */
public class UpdateNetworkWebhooksHttpServer200ApplicationJSON {
    /**
     * A Base64 encoded ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateNetworkWebhooksHttpServer200ApplicationJSON withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * A name for easy reference to the HTTP server
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkWebhooksHttpServer200ApplicationJSON withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * A Meraki network ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkId")
    public String networkId;
    public UpdateNetworkWebhooksHttpServer200ApplicationJSON withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    
    /**
     * The payload template to use when posting data to the HTTP server.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadTemplate")
    public UpdateNetworkWebhooksHttpServer200ApplicationJSONPayloadTemplate payloadTemplate;
    public UpdateNetworkWebhooksHttpServer200ApplicationJSON withPayloadTemplate(UpdateNetworkWebhooksHttpServer200ApplicationJSONPayloadTemplate payloadTemplate) {
        this.payloadTemplate = payloadTemplate;
        return this;
    }
    
    /**
     * The URL of the HTTP server.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public UpdateNetworkWebhooksHttpServer200ApplicationJSON withUrl(String url) {
        this.url = url;
        return this;
    }
    
}
