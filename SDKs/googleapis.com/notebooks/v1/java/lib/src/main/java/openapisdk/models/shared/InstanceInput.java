package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceInput
 * The definition of a notebook instance.
**/
public class InstanceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorConfig")
    public AcceleratorConfig acceleratorConfig;
    public InstanceInput withAcceleratorConfig(AcceleratorConfig acceleratorConfig) {
        this.acceleratorConfig = acceleratorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootDiskSizeGb")
    public String bootDiskSizeGb;
    public InstanceInput withBootDiskSizeGb(String bootDiskSizeGb) {
        this.bootDiskSizeGb = bootDiskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootDiskType")
    public InstanceBootDiskTypeEnum bootDiskType;
    public InstanceInput withBootDiskType(InstanceBootDiskTypeEnum bootDiskType) {
        this.bootDiskType = bootDiskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canIpForward")
    public Boolean canIpForward;
    public InstanceInput withCanIpForward(Boolean canIpForward) {
        this.canIpForward = canIpForward;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImage")
    public ContainerImage containerImage;
    public InstanceInput withContainerImage(ContainerImage containerImage) {
        this.containerImage = containerImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customGpuDriverPath")
    public String customGpuDriverPath;
    public InstanceInput withCustomGpuDriverPath(String customGpuDriverPath) {
        this.customGpuDriverPath = customGpuDriverPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDiskSizeGb")
    public String dataDiskSizeGb;
    public InstanceInput withDataDiskSizeGb(String dataDiskSizeGb) {
        this.dataDiskSizeGb = dataDiskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDiskType")
    public InstanceDataDiskTypeEnum dataDiskType;
    public InstanceInput withDataDiskType(InstanceDataDiskTypeEnum dataDiskType) {
        this.dataDiskType = dataDiskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskEncryption")
    public InstanceDiskEncryptionEnum diskEncryption;
    public InstanceInput withDiskEncryption(InstanceDiskEncryptionEnum diskEncryption) {
        this.diskEncryption = diskEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installGpuDriver")
    public Boolean installGpuDriver;
    public InstanceInput withInstallGpuDriver(Boolean installGpuDriver) {
        this.installGpuDriver = installGpuDriver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceOwners")
    public String[] instanceOwners;
    public InstanceInput withInstanceOwners(String[] instanceOwners) {
        this.instanceOwners = instanceOwners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKey")
    public String kmsKey;
    public InstanceInput withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public InstanceInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public InstanceInput withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public InstanceInput withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public InstanceInput withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nicType")
    public InstanceNicTypeEnum nicType;
    public InstanceInput withNicType(InstanceNicTypeEnum nicType) {
        this.nicType = nicType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noProxyAccess")
    public Boolean noProxyAccess;
    public InstanceInput withNoProxyAccess(Boolean noProxyAccess) {
        this.noProxyAccess = noProxyAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noPublicIp")
    public Boolean noPublicIp;
    public InstanceInput withNoPublicIp(Boolean noPublicIp) {
        this.noPublicIp = noPublicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noRemoveDataDisk")
    public Boolean noRemoveDataDisk;
    public InstanceInput withNoRemoveDataDisk(Boolean noRemoveDataDisk) {
        this.noRemoveDataDisk = noRemoveDataDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postStartupScript")
    public String postStartupScript;
    public InstanceInput withPostStartupScript(String postStartupScript) {
        this.postStartupScript = postStartupScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservationAffinity")
    public ReservationAffinity reservationAffinity;
    public InstanceInput withReservationAffinity(ReservationAffinity reservationAffinity) {
        this.reservationAffinity = reservationAffinity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public InstanceInput withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountScopes")
    public String[] serviceAccountScopes;
    public InstanceInput withServiceAccountScopes(String[] serviceAccountScopes) {
        this.serviceAccountScopes = serviceAccountScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shieldedInstanceConfig")
    public ShieldedInstanceConfig shieldedInstanceConfig;
    public InstanceInput withShieldedInstanceConfig(ShieldedInstanceConfig shieldedInstanceConfig) {
        this.shieldedInstanceConfig = shieldedInstanceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public InstanceInput withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public InstanceInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeHistory")
    public UpgradeHistoryEntry[] upgradeHistory;
    public InstanceInput withUpgradeHistory(UpgradeHistoryEntry[] upgradeHistory) {
        this.upgradeHistory = upgradeHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmImage")
    public VmImage vmImage;
    public InstanceInput withVmImage(VmImage vmImage) {
        this.vmImage = vmImage;
        return this;
    }
}