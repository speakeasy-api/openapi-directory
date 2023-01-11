package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Network
 * A Network.
**/
public class Network {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidr")
    public String cidr;
    public Network withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayIp")
    public String gatewayIp;
    public Network withGatewayIp(String gatewayIp) {
        this.gatewayIp = gatewayIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Network withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public Network withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jumboFramesEnabled")
    public Boolean jumboFramesEnabled;
    public Network withJumboFramesEnabled(Boolean jumboFramesEnabled) {
        this.jumboFramesEnabled = jumboFramesEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Network withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macAddress")
    public String[] macAddress;
    public Network withMacAddress(String[] macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountPoints")
    public NetworkMountPoint[] mountPoints;
    public Network withMountPoints(NetworkMountPoint[] mountPoints) {
        this.mountPoints = mountPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Network withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pod")
    public String pod;
    public Network withPod(String pod) {
        this.pod = pod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservations")
    public NetworkAddressReservation[] reservations;
    public Network withReservations(NetworkAddressReservation[] reservations) {
        this.reservations = reservations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicesCidr")
    public String servicesCidr;
    public Network withServicesCidr(String servicesCidr) {
        this.servicesCidr = servicesCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public NetworkStateEnum state;
    public Network withState(NetworkStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public NetworkTypeEnum type;
    public Network withType(NetworkTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanId")
    public String vlanId;
    public Network withVlanId(String vlanId) {
        this.vlanId = vlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vrf")
    public Vrf vrf;
    public Network withVrf(Vrf vrf) {
        this.vrf = vrf;
        return this;
    }
}