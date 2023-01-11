package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectionPolicyListConnectionPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_policies")
    public openapisdk.models.shared.VoiceV1ConnectionPolicy[] connectionPolicies;
    public ListConnectionPolicyListConnectionPolicyResponse withConnectionPolicies(openapisdk.models.shared.VoiceV1ConnectionPolicy[] connectionPolicies) {
        this.connectionPolicies = connectionPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListConnectionPolicyListConnectionPolicyResponseMeta meta;
    public ListConnectionPolicyListConnectionPolicyResponse withMeta(ListConnectionPolicyListConnectionPolicyResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}