/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2 - WAN 2 settings.
 */
public class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2 {
    /**
     * Enable or disable the interface.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;

    public UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2 withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
    /**
     * Configuration options for PPPoE.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pppoe")
    public UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe pppoe;

    public UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2 withPppoe(UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe pppoe) {
        this.pppoe = pppoe;
        return this;
    }
    
    /**
     * SVI settings by protocol.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("svis")
    public UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis svis;

    public UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2 withSvis(UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis svis) {
        this.svis = svis;
        return this;
    }
    
    /**
     * VLAN tagging settings.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanTagging")
    public UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging vlanTagging;

    public UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2 withVlanTagging(UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging vlanTagging) {
        this.vlanTagging = vlanTagging;
        return this;
    }
    
    public UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2(){}
}
