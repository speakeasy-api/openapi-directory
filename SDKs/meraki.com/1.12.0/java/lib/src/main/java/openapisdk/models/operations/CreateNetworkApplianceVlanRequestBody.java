package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkApplianceVlanRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applianceIp")
    public String applianceIp;
    public CreateNetworkApplianceVlanRequestBody withApplianceIp(String applianceIp) {
        this.applianceIp = applianceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;
    public CreateNetworkApplianceVlanRequestBody withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CreateNetworkApplianceVlanRequestBody withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkApplianceVlanRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public CreateNetworkApplianceVlanRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
}