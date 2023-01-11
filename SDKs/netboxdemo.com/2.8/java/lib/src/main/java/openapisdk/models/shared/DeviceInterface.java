package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeviceInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCable cable;
    public DeviceInterface withCable(NestedCable cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_endpoint")
    public java.util.Map<String, String> connectedEndpoint;
    public DeviceInterface withConnectedEndpoint(java.util.Map<String, String> connectedEndpoint) {
        this.connectedEndpoint = connectedEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_endpoint_type")
    public String connectedEndpointType;
    public DeviceInterface withConnectedEndpointType(String connectedEndpointType) {
        this.connectedEndpointType = connectedEndpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public DeviceInterfaceConnectionStatus connectionStatus;
    public DeviceInterface withConnectionStatus(DeviceInterfaceConnectionStatus connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count_ipaddresses")
    public Long countIpaddresses;
    public DeviceInterface withCountIpaddresses(Long countIpaddresses) {
        this.countIpaddresses = countIpaddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DeviceInterface withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public DeviceInterface withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public DeviceInterface withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DeviceInterface withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lag")
    public NestedInterface lag;
    public DeviceInterface withLag(NestedInterface lag) {
        this.lag = lag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public DeviceInterface withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mgmt_only")
    public Boolean mgmtOnly;
    public DeviceInterface withMgmtOnly(Boolean mgmtOnly) {
        this.mgmtOnly = mgmtOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public DeviceInterfaceMode mode;
    public DeviceInterface withMode(DeviceInterfaceMode mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mtu")
    public Long mtu;
    public DeviceInterface withMtu(Long mtu) {
        this.mtu = mtu;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DeviceInterface withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagged_vlans")
    public NestedVlan[] taggedVlans;
    public DeviceInterface withTaggedVlans(NestedVlan[] taggedVlans) {
        this.taggedVlans = taggedVlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public DeviceInterface withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public DeviceInterfaceType type;
    public DeviceInterface withType(DeviceInterfaceType type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("untagged_vlan")
    public NestedVlan untaggedVlan;
    public DeviceInterface withUntaggedVlan(NestedVlan untaggedVlan) {
        this.untaggedVlan = untaggedVlan;
        return this;
    }
}