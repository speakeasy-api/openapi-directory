package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualMachineConfigInput
 * The config settings for virtual machine.
**/
public class VirtualMachineConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorConfig")
    public RuntimeAcceleratorConfig acceleratorConfig;
    public VirtualMachineConfigInput withAcceleratorConfig(RuntimeAcceleratorConfig acceleratorConfig) {
        this.acceleratorConfig = acceleratorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootImage")
    public java.util.Map<String, Object> bootImage;
    public VirtualMachineConfigInput withBootImage(java.util.Map<String, Object> bootImage) {
        this.bootImage = bootImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImages")
    public ContainerImage[] containerImages;
    public VirtualMachineConfigInput withContainerImages(ContainerImage[] containerImages) {
        this.containerImages = containerImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDisk")
    public LocalDiskInput dataDisk;
    public VirtualMachineConfigInput withDataDisk(LocalDiskInput dataDisk) {
        this.dataDisk = dataDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfig")
    public EncryptionConfig encryptionConfig;
    public VirtualMachineConfigInput withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalIpOnly")
    public Boolean internalIpOnly;
    public VirtualMachineConfigInput withInternalIpOnly(Boolean internalIpOnly) {
        this.internalIpOnly = internalIpOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public VirtualMachineConfigInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public VirtualMachineConfigInput withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public VirtualMachineConfigInput withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public VirtualMachineConfigInput withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nicType")
    public VirtualMachineConfigNicTypeEnum nicType;
    public VirtualMachineConfigInput withNicType(VirtualMachineConfigNicTypeEnum nicType) {
        this.nicType = nicType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRange")
    public String reservedIpRange;
    public VirtualMachineConfigInput withReservedIpRange(String reservedIpRange) {
        this.reservedIpRange = reservedIpRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shieldedInstanceConfig")
    public RuntimeShieldedInstanceConfig shieldedInstanceConfig;
    public VirtualMachineConfigInput withShieldedInstanceConfig(RuntimeShieldedInstanceConfig shieldedInstanceConfig) {
        this.shieldedInstanceConfig = shieldedInstanceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public VirtualMachineConfigInput withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public VirtualMachineConfigInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}