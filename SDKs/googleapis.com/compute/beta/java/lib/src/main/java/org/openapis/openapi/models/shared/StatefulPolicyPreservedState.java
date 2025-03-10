/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StatefulPolicyPreservedState - Configuration of preserved resources.
 */
public class StatefulPolicyPreservedState {
    /**
     * Disks created on the instances that will be preserved on instance delete, update, etc. This map is keyed with the device names of the disks.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disks")
    public java.util.Map<String, StatefulPolicyPreservedStateDiskDevice> disks;

    public StatefulPolicyPreservedState withDisks(java.util.Map<String, StatefulPolicyPreservedStateDiskDevice> disks) {
        this.disks = disks;
        return this;
    }
    
    /**
     * External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalIPs")
    public java.util.Map<String, StatefulPolicyPreservedStateNetworkIp> externalIPs;

    public StatefulPolicyPreservedState withExternalIPs(java.util.Map<String, StatefulPolicyPreservedStateNetworkIp> externalIPs) {
        this.externalIPs = externalIPs;
        return this;
    }
    
    /**
     * Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalIPs")
    public java.util.Map<String, StatefulPolicyPreservedStateNetworkIp> internalIPs;

    public StatefulPolicyPreservedState withInternalIPs(java.util.Map<String, StatefulPolicyPreservedStateNetworkIp> internalIPs) {
        this.internalIPs = internalIPs;
        return this;
    }
    
    public StatefulPolicyPreservedState(){}
}
