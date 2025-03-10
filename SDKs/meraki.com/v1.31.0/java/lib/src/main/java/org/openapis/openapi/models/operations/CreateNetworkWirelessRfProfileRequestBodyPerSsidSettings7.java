/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7 - Settings for SSID 7
 */
public class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7 {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandOperationMode")
    public CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum bandOperationMode;
    public CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7 withBandOperationMode(CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum bandOperationMode) {
        this.bandOperationMode = bandOperationMode;
        return this;
    }
    
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandSteeringEnabled")
    public Boolean bandSteeringEnabled;
    public CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7 withBandSteeringEnabled(Boolean bandSteeringEnabled) {
        this.bandSteeringEnabled = bandSteeringEnabled;
        return this;
    }
    
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBitrate")
    public Float minBitrate;
    public CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7 withMinBitrate(Float minBitrate) {
        this.minBitrate = minBitrate;
        return this;
    }
    
}
