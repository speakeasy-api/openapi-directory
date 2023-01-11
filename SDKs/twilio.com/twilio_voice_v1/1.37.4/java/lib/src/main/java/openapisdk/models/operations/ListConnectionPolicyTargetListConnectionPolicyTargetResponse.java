package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectionPolicyTargetListConnectionPolicyTargetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta meta;
    public ListConnectionPolicyTargetListConnectionPolicyTargetResponse withMeta(ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget[] targets;
    public ListConnectionPolicyTargetListConnectionPolicyTargetResponse withTargets(openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget[] targets) {
        this.targets = targets;
        return this;
    }
}