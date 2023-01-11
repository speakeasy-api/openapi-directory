package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisionNetworkClientsRequestBodyPoliciesBySsid7
 * The number for the SSID
**/
public class ProvisionNetworkClientsRequestBodyPoliciesBySsid7 {
    @JsonProperty("devicePolicy")
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum devicePolicy;
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid7 withDevicePolicy(ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum devicePolicy) {
        this.devicePolicy = devicePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid7 withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
}