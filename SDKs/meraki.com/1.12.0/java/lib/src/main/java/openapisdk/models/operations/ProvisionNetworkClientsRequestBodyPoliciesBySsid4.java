package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisionNetworkClientsRequestBodyPoliciesBySsid4
 * The number for the SSID
**/
public class ProvisionNetworkClientsRequestBodyPoliciesBySsid4 {
    @JsonProperty("devicePolicy")
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum devicePolicy;
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid4 withDevicePolicy(ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum devicePolicy) {
        this.devicePolicy = devicePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid4 withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
}