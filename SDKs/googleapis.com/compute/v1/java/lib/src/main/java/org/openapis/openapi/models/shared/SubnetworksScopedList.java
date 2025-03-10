/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SubnetworksScopedList {
    /**
     * A list of subnetworks contained in this scope.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetworks")
    public Subnetwork[] subnetworks;

    public SubnetworksScopedList withSubnetworks(Subnetwork[] subnetworks) {
        this.subnetworks = subnetworks;
        return this;
    }
    
    /**
     * An informational warning that appears when the list of addresses is empty.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public SubnetworksScopedListWarning warning;

    public SubnetworksScopedList withWarning(SubnetworksScopedListWarning warning) {
        this.warning = warning;
        return this;
    }
    
    public SubnetworksScopedList(){}
}
