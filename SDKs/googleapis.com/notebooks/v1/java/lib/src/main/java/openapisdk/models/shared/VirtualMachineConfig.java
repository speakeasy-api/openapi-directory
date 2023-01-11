package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualMachineConfig
 * The config settings for virtual machine.
**/
public class VirtualMachineConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorConfig")
    public RuntimeAcceleratorConfig acceleratorConfig;
    public VirtualMachineConfig withAcceleratorConfig(RuntimeAcceleratorConfig acceleratorConfig) {
        this.acceleratorConfig = acceleratorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootImage")
    public java.util.Map<String, Object> bootImage;
    public VirtualMachineConfig withBootImage(java.util.Map<String, Object> bootImage) {
        this.bootImage = bootImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImages")
    public ContainerImage[] containerImages;
    public VirtualMachineConfig withContainerImages(ContainerImage[] containerImages) {
        this.containerImages = containerImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDisk")
    public LocalDisk dataDisk;
    public VirtualMachineConfig withDataDisk(LocalDisk dataDisk) {
        this.dataDisk = dataDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfig")
    public EncryptionConfig encryptionConfig;
    public VirtualMachineConfig withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestAttributes")
    public java.util.Map<String, String> guestAttributes;
    public VirtualMachineConfig withGuestAttributes(java.util.Map<String, String> guestAttributes) {
        this.guestAttributes = guestAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalIpOnly")
    public Boolean internalIpOnly;
    public VirtualMachineConfig withInternalIpOnly(Boolean internalIpOnly) {
        this.internalIpOnly = internalIpOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public VirtualMachineConfig withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public VirtualMachineConfig withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public VirtualMachineConfig withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public VirtualMachineConfig withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nicType")
    public VirtualMachineConfigNicTypeEnum nicType;
    public VirtualMachineConfig withNicType(VirtualMachineConfigNicTypeEnum nicType) {
        this.nicType = nicType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRange")
    public String reservedIpRange;
    public VirtualMachineConfig withReservedIpRange(String reservedIpRange) {
        this.reservedIpRange = reservedIpRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shieldedInstanceConfig")
    public RuntimeShieldedInstanceConfig shieldedInstanceConfig;
    public VirtualMachineConfig withShieldedInstanceConfig(RuntimeShieldedInstanceConfig shieldedInstanceConfig) {
        this.shieldedInstanceConfig = shieldedInstanceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public VirtualMachineConfig withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public VirtualMachineConfig withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public VirtualMachineConfig withZone(String zone) {
        this.zone = zone;
        return this;
    }
}