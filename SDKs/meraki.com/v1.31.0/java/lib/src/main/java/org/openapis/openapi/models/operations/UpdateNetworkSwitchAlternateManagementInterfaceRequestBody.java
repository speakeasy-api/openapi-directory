/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchAlternateManagementInterfaceRequestBody {
    /**
     * Boolean value to enable or disable AMI configuration. If enabled, VLAN and protocols must be set
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
    /**
     * Can be one or more of the following values: 'radius', 'snmp' or 'syslog'
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocols")
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum[] protocols;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBody withProtocols(UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
    
    /**
     * Array of switch serial number and IP assignment. If parameter is present, it cannot have empty body. Note: switches parameter is not applicable for template networks, in other words, do not put 'switches' in the body when updating template networks. Also, an empty 'switches' array will remove all previous assignments
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switches")
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches[] switches;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBody withSwitches(UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches[] switches) {
        this.switches = switches;
        return this;
    }
    
    /**
     * Alternate management VLAN, must be between 1 and 4094
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanId")
    public Long vlanId;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBody withVlanId(Long vlanId) {
        this.vlanId = vlanId;
        return this;
    }
    
}
