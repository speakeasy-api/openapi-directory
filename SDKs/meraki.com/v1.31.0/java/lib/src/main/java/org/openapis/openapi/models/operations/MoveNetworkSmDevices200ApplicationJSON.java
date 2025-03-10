/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MoveNetworkSmDevices200ApplicationJSON - Successful operation
 */
public class MoveNetworkSmDevices200ApplicationJSON {
    /**
     * The Meraki Ids of the set of devices.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public MoveNetworkSmDevices200ApplicationJSON withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    
    /**
     * The network to which the devices was moved.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newNetwork")
    public String newNetwork;
    public MoveNetworkSmDevices200ApplicationJSON withNewNetwork(String newNetwork) {
        this.newNetwork = newNetwork;
        return this;
    }
    
}
