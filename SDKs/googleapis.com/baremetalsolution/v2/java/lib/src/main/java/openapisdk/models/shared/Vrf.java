package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Vrf
 * A network VRF.
**/
public class Vrf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Vrf withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qosPolicy")
    public QosPolicy qosPolicy;
    public Vrf withQosPolicy(QosPolicy qosPolicy) {
        this.qosPolicy = qosPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public VrfStateEnum state;
    public Vrf withState(VrfStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanAttachments")
    public VlanAttachment[] vlanAttachments;
    public Vrf withVlanAttachments(VlanAttachment[] vlanAttachments) {
        this.vlanAttachments = vlanAttachments;
        return this;
    }
}