package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableInterfaceInput {
    @JsonProperty("circuit_termination")
    public Long circuitTermination;
    public WritableInterfaceInput withCircuitTermination(Long circuitTermination) {
        this.circuitTermination = circuitTermination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableInterfaceInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public Long device;
    public WritableInterfaceInput withDevice(Long device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public WritableInterfaceInput withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_factor")
    public Long formFactor;
    public WritableInterfaceInput withFormFactor(Long formFactor) {
        this.formFactor = formFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lag")
    public Long lag;
    public WritableInterfaceInput withLag(Long lag) {
        this.lag = lag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public WritableInterfaceInput withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mgmt_only")
    public Boolean mgmtOnly;
    public WritableInterfaceInput withMgmtOnly(Boolean mgmtOnly) {
        this.mgmtOnly = mgmtOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public Long mode;
    public WritableInterfaceInput withMode(Long mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mtu")
    public Long mtu;
    public WritableInterfaceInput withMtu(Long mtu) {
        this.mtu = mtu;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableInterfaceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagged_vlans")
    public Long[] taggedVlans;
    public WritableInterfaceInput withTaggedVlans(Long[] taggedVlans) {
        this.taggedVlans = taggedVlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableInterfaceInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("untagged_vlan")
    public Long untaggedVlan;
    public WritableInterfaceInput withUntaggedVlan(Long untaggedVlan) {
        this.untaggedVlan = untaggedVlan;
        return this;
    }
}