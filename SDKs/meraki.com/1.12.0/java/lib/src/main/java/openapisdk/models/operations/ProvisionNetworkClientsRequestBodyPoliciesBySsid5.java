package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisionNetworkClientsRequestBodyPoliciesBySsid5
 * The number for the SSID
**/
public class ProvisionNetworkClientsRequestBodyPoliciesBySsid5 {
    @JsonProperty("devicePolicy")
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum devicePolicy;
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid5 withDevicePolicy(ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum devicePolicy) {
        this.devicePolicy = devicePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid5 withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
}