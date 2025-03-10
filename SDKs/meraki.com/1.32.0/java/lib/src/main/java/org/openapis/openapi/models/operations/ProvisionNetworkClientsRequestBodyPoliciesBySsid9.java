/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProvisionNetworkClientsRequestBodyPoliciesBySsid9 - The number for the SSID
 */
public class ProvisionNetworkClientsRequestBodyPoliciesBySsid9 {
    /**
     * The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    @JsonProperty("devicePolicy")
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum devicePolicy;

    public ProvisionNetworkClientsRequestBodyPoliciesBySsid9 withDevicePolicy(ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum devicePolicy) {
        this.devicePolicy = devicePolicy;
        return this;
    }
    
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;

    public ProvisionNetworkClientsRequestBodyPoliciesBySsid9 withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid9(@JsonProperty("devicePolicy") ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum devicePolicy) {
        this.devicePolicy = devicePolicy;
  }
}
