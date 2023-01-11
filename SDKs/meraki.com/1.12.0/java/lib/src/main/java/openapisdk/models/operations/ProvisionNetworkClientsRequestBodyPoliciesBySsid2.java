package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisionNetworkClientsRequestBodyPoliciesBySsid2
 * The number for the SSID
**/
public class ProvisionNetworkClientsRequestBodyPoliciesBySsid2 {
    @JsonProperty("devicePolicy")
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum devicePolicy;
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid2 withDevicePolicy(ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum devicePolicy) {
        this.devicePolicy = devicePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid2 withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
}