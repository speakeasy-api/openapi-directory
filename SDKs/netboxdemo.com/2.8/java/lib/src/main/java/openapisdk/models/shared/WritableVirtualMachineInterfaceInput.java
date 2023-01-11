package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableVirtualMachineInterfaceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableVirtualMachineInterfaceInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public WritableVirtualMachineInterfaceInput withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public WritableVirtualMachineInterfaceInput withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public WritableVirtualMachineInterfaceModeEnum mode;
    public WritableVirtualMachineInterfaceInput withMode(WritableVirtualMachineInterfaceModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mtu")
    public Long mtu;
    public WritableVirtualMachineInterfaceInput withMtu(Long mtu) {
        this.mtu = mtu;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableVirtualMachineInterfaceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagged_vlans")
    public Long[] taggedVlans;
    public WritableVirtualMachineInterfaceInput withTaggedVlans(Long[] taggedVlans) {
        this.taggedVlans = taggedVlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableVirtualMachineInterfaceInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public WritableVirtualMachineInterfaceTypeEnum type;
    public WritableVirtualMachineInterfaceInput withType(WritableVirtualMachineInterfaceTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("untagged_vlan")
    public Long untaggedVlan;
    public WritableVirtualMachineInterfaceInput withUntaggedVlan(Long untaggedVlan) {
        this.untaggedVlan = untaggedVlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_machine")
    public Long virtualMachine;
    public WritableVirtualMachineInterfaceInput withVirtualMachine(Long virtualMachine) {
        this.virtualMachine = virtualMachine;
        return this;
    }
}