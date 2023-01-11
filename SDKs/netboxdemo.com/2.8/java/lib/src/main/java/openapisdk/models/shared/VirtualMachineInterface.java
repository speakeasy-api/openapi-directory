package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VirtualMachineInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public VirtualMachineInterface withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public VirtualMachineInterface withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public VirtualMachineInterface withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public VirtualMachineInterface withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public VirtualMachineInterfaceMode mode;
    public VirtualMachineInterface withMode(VirtualMachineInterfaceMode mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mtu")
    public Long mtu;
    public VirtualMachineInterface withMtu(Long mtu) {
        this.mtu = mtu;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public VirtualMachineInterface withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagged_vlans")
    public NestedVlan[] taggedVlans;
    public VirtualMachineInterface withTaggedVlans(NestedVlan[] taggedVlans) {
        this.taggedVlans = taggedVlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public VirtualMachineInterface withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public VirtualMachineInterfaceType type;
    public VirtualMachineInterface withType(VirtualMachineInterfaceType type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("untagged_vlan")
    public NestedVlan untaggedVlan;
    public VirtualMachineInterface withUntaggedVlan(NestedVlan untaggedVlan) {
        this.untaggedVlan = untaggedVlan;
        return this;
    }
    @JsonProperty("virtual_machine")
    public NestedVirtualMachine virtualMachine;
    public VirtualMachineInterface withVirtualMachine(NestedVirtualMachine virtualMachine) {
        this.virtualMachine = virtualMachine;
        return this;
    }
}