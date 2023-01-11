package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VlanAttachment
 * VLAN attachment details.
**/
public class VlanAttachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public VlanAttachment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pairingKey")
    public String pairingKey;
    public VlanAttachment withPairingKey(String pairingKey) {
        this.pairingKey = pairingKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peerIp")
    public String peerIp;
    public VlanAttachment withPeerIp(String peerIp) {
        this.peerIp = peerIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peerVlanId")
    public String peerVlanId;
    public VlanAttachment withPeerVlanId(String peerVlanId) {
        this.peerVlanId = peerVlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qosPolicy")
    public QosPolicy qosPolicy;
    public VlanAttachment withQosPolicy(QosPolicy qosPolicy) {
        this.qosPolicy = qosPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routerIp")
    public String routerIp;
    public VlanAttachment withRouterIp(String routerIp) {
        this.routerIp = routerIp;
        return this;
    }
}