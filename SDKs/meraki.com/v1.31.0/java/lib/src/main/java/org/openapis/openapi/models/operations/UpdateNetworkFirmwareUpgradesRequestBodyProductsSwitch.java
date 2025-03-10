/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch - The network device to be updated
 */
public class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch {
    /**
     * The pending firmware upgrade if it exists
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextUpgrade")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade nextUpgrade;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch withNextUpgrade(UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade nextUpgrade) {
        this.nextUpgrade = nextUpgrade;
        return this;
    }
    
    /**
     * Whether or not the network wants beta firmware
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participateInNextBetaRelease")
    public Boolean participateInNextBetaRelease;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch withParticipateInNextBetaRelease(Boolean participateInNextBetaRelease) {
        this.participateInNextBetaRelease = participateInNextBetaRelease;
        return this;
    }
    
}
