package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProvisionNetworkClientsRequestBody {
    @JsonProperty("clients")
    public ProvisionNetworkClientsRequestBodyClients[] clients;
    public ProvisionNetworkClientsRequestBody withClients(ProvisionNetworkClientsRequestBodyClients[] clients) {
        this.clients = clients;
        return this;
    }
    @JsonProperty("devicePolicy")
    public ProvisionNetworkClientsRequestBodyDevicePolicyEnum devicePolicy;
    public ProvisionNetworkClientsRequestBody withDevicePolicy(ProvisionNetworkClientsRequestBodyDevicePolicyEnum devicePolicy) {
        this.devicePolicy = devicePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;
    public ProvisionNetworkClientsRequestBody withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policiesBySecurityAppliance")
    public ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance policiesBySecurityAppliance;
    public ProvisionNetworkClientsRequestBody withPoliciesBySecurityAppliance(ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance policiesBySecurityAppliance) {
        this.policiesBySecurityAppliance = policiesBySecurityAppliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policiesBySsid")
    public ProvisionNetworkClientsRequestBodyPoliciesBySsid policiesBySsid;
    public ProvisionNetworkClientsRequestBody withPoliciesBySsid(ProvisionNetworkClientsRequestBodyPoliciesBySsid policiesBySsid) {
        this.policiesBySsid = policiesBySsid;
        return this;
    }
}