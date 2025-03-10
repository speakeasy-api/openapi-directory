/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class NetworkPerformanceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalEgressBandwidthTier")
    public NetworkPerformanceConfigTotalEgressBandwidthTierEnum totalEgressBandwidthTier;

    public NetworkPerformanceConfig withTotalEgressBandwidthTier(NetworkPerformanceConfigTotalEgressBandwidthTierEnum totalEgressBandwidthTier) {
        this.totalEgressBandwidthTier = totalEgressBandwidthTier;
        return this;
    }
    
    public NetworkPerformanceConfig(){}
}
