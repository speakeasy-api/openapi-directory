package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisionNetworkClientsRequestBodyPoliciesBySsid1
 * The number for the SSID
**/
public class ProvisionNetworkClientsRequestBodyPoliciesBySsid1 {
    @JsonProperty("devicePolicy")
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum devicePolicy;
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid1 withDevicePolicy(ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum devicePolicy) {
        this.devicePolicy = devicePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid1 withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
}