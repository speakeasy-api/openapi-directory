/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VappInstantRecoveryOptions - vApp Instant Recovery options.
 */
public class VappInstantRecoveryOptions {
    /**
     * An array of network connections available through the specified vApp object.
     */
    @JsonProperty("availableVappNetworks")
    public VappNetworkSummary[] availableVappNetworks;

    public VappInstantRecoveryOptions withAvailableVappNetworks(VappNetworkSummary[] availableVappNetworks) {
        this.availableVappNetworks = availableVappNetworks;
        return this;
    }
    
    /**
     * An array of virtual machines that can be restored and their associated default network connections.
     */
    @JsonProperty("restorableVms")
    public VappVmRestoreSpec[] restorableVms;

    public VappInstantRecoveryOptions withRestorableVms(VappVmRestoreSpec[] restorableVms) {
        this.restorableVms = restorableVms;
        return this;
    }
    
    public VappInstantRecoveryOptions(@JsonProperty("availableVappNetworks") VappNetworkSummary[] availableVappNetworks, @JsonProperty("restorableVms") VappVmRestoreSpec[] restorableVms) {
        this.availableVappNetworks = availableVappNetworks;
        this.restorableVms = restorableVms;
  }
}
