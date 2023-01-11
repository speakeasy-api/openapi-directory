package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableDeviceInterfaceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCableInput cable;
    public WritableDeviceInterfaceInput withCable(NestedCableInput cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public Boolean connectionStatus;
    public WritableDeviceInterfaceInput withConnectionStatus(Boolean connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableDeviceInterfaceInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public Long device;
    public WritableDeviceInterfaceInput withDevice(Long device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public WritableDeviceInterfaceInput withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lag")
    public Long lag;
    public WritableDeviceInterfaceInput withLag(Long lag) {
        this.lag = lag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public WritableDeviceInterfaceInput withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mgmt_only")
    public Boolean mgmtOnly;
    public WritableDeviceInterfaceInput withMgmtOnly(Boolean mgmtOnly) {
        this.mgmtOnly = mgmtOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public WritableDeviceInterfaceModeEnum mode;
    public WritableDeviceInterfaceInput withMode(WritableDeviceInterfaceModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mtu")
    public Long mtu;
    public WritableDeviceInterfaceInput withMtu(Long mtu) {
        this.mtu = mtu;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableDeviceInterfaceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagged_vlans")
    public Long[] taggedVlans;
    public WritableDeviceInterfaceInput withTaggedVlans(Long[] taggedVlans) {
        this.taggedVlans = taggedVlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableDeviceInterfaceInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public WritableDeviceInterfaceTypeEnum type;
    public WritableDeviceInterfaceInput withType(WritableDeviceInterfaceTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("untagged_vlan")
    public Long untaggedVlan;
    public WritableDeviceInterfaceInput withUntaggedVlan(Long untaggedVlan) {
        this.untaggedVlan = untaggedVlan;
        return this;
    }
}