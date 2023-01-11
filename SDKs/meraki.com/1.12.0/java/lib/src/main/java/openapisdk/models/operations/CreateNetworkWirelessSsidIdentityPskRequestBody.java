package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkWirelessSsidIdentityPskRequestBody {
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;
    public CreateNetworkWirelessSsidIdentityPskRequestBody withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkWirelessSsidIdentityPskRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passphrase")
    public String passphrase;
    public CreateNetworkWirelessSsidIdentityPskRequestBody withPassphrase(String passphrase) {
        this.passphrase = passphrase;
        return this;
    }
}