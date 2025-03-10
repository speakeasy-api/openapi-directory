/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProvisionNetworkClientsRequestBodyPoliciesBySsid8 - The number for the SSID
 */
public class ProvisionNetworkClientsRequestBodyPoliciesBySsid8 {
    /**
     * The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    @JsonProperty("devicePolicy")
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum devicePolicy;

    public ProvisionNetworkClientsRequestBodyPoliciesBySsid8 withDevicePolicy(ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum devicePolicy) {
        this.devicePolicy = devicePolicy;
        return this;
    }
    
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;

    public ProvisionNetworkClientsRequestBodyPoliciesBySsid8 withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid8(@JsonProperty("devicePolicy") ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum devicePolicy) {
        this.devicePolicy = devicePolicy;
  }
}
