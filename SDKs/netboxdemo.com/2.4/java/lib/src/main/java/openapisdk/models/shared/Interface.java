package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Interface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("circuit_termination")
    public InterfaceCircuitTermination circuitTermination;
    public Interface withCircuitTermination(InterfaceCircuitTermination circuitTermination) {
        this.circuitTermination = circuitTermination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Interface withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public Interface withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public Interface withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_factor")
    public InterfaceFormFactor formFactor;
    public Interface withFormFactor(InterfaceFormFactor formFactor) {
        this.formFactor = formFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Interface withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface_connection")
    public String interfaceConnection;
    public Interface withInterfaceConnection(String interfaceConnection) {
        this.interfaceConnection = interfaceConnection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_connected")
    public String isConnected;
    public Interface withIsConnected(String isConnected) {
        this.isConnected = isConnected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lag")
    public NestedInterface lag;
    public Interface withLag(NestedInterface lag) {
        this.lag = lag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public Interface withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mgmt_only")
    public Boolean mgmtOnly;
    public Interface withMgmtOnly(Boolean mgmtOnly) {
        this.mgmtOnly = mgmtOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public InterfaceMode mode;
    public Interface withMode(InterfaceMode mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mtu")
    public Long mtu;
    public Interface withMtu(Long mtu) {
        this.mtu = mtu;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Interface withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagged_vlans")
    public InterfaceVlan[] taggedVlans;
    public Interface withTaggedVlans(InterfaceVlan[] taggedVlans) {
        this.taggedVlans = taggedVlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Interface withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("untagged_vlan")
    public InterfaceVlan untaggedVlan;
    public Interface withUntaggedVlan(InterfaceVlan untaggedVlan) {
        this.untaggedVlan = untaggedVlan;
        return this;
    }
}