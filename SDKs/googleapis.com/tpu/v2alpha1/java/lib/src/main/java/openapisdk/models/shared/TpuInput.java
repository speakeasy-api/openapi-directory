package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TpuInput
 * Details of the TPU resource(s) being requested.
**/
public class TpuInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeSpec")
    public NodeSpecInput[] nodeSpec;
    public TpuInput withNodeSpec(NodeSpecInput[] nodeSpec) {
        this.nodeSpec = nodeSpec;
        return this;
    }
}