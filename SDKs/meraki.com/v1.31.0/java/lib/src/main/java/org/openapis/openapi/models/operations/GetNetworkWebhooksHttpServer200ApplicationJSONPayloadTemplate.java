/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetNetworkWebhooksHttpServer200ApplicationJSONPayloadTemplate - The payload template to use when posting data to the HTTP server.
 */
public class GetNetworkWebhooksHttpServer200ApplicationJSONPayloadTemplate {
    /**
     * The name of the payload template.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetNetworkWebhooksHttpServer200ApplicationJSONPayloadTemplate withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The ID of the payload template.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadTemplateId")
    public String payloadTemplateId;
    public GetNetworkWebhooksHttpServer200ApplicationJSONPayloadTemplate withPayloadTemplateId(String payloadTemplateId) {
        this.payloadTemplateId = payloadTemplateId;
        return this;
    }
    
}
