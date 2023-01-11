package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VlanAttachment
 * VLAN attachment for cloud interconnect.
**/
public class VlanAttachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidth")
    public VlanAttachmentBandwidthEnum bandwidth;
    public VlanAttachment withBandwidth(VlanAttachmentBandwidthEnum bandwidth) {
        this.bandwidth = bandwidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanCount")
    public Usage vlanCount;
    public VlanAttachment withVlanCount(Usage vlanCount) {
        this.vlanCount = vlanCount;
        return this;
    }
}