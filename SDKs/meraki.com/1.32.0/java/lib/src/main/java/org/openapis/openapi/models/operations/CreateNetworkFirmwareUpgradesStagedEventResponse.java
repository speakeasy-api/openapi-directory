/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateNetworkFirmwareUpgradesStagedEventResponse {
    
    public String contentType;

    public CreateNetworkFirmwareUpgradesStagedEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateNetworkFirmwareUpgradesStagedEventResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateNetworkFirmwareUpgradesStagedEventResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSON createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject;

    public CreateNetworkFirmwareUpgradesStagedEventResponse withCreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject(CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSON createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject) {
        this.createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject = createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject;
        return this;
    }
    
    public CreateNetworkFirmwareUpgradesStagedEventResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
