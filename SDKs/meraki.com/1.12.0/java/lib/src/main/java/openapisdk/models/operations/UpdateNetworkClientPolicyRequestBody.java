package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkClientPolicyRequestBody {
    @JsonProperty("devicePolicy")
    public String devicePolicy;
    public UpdateNetworkClientPolicyRequestBody withDevicePolicy(String devicePolicy) {
        this.devicePolicy = devicePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;
    public UpdateNetworkClientPolicyRequestBody withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
}