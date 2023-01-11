package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Instance
 * The definition of a notebook instance.
**/
public class Instance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorConfig")
    public AcceleratorConfig acceleratorConfig;
    public Instance withAcceleratorConfig(AcceleratorConfig acceleratorConfig) {
        this.acceleratorConfig = acceleratorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootDiskSizeGb")
    public String bootDiskSizeGb;
    public Instance withBootDiskSizeGb(String bootDiskSizeGb) {
        this.bootDiskSizeGb = bootDiskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootDiskType")
    public InstanceBootDiskTypeEnum bootDiskType;
    public Instance withBootDiskType(InstanceBootDiskTypeEnum bootDiskType) {
        this.bootDiskType = bootDiskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canIpForward")
    public Boolean canIpForward;
    public Instance withCanIpForward(Boolean canIpForward) {
        this.canIpForward = canIpForward;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImage")
    public ContainerImage containerImage;
    public Instance withContainerImage(ContainerImage containerImage) {
        this.containerImage = containerImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Instance withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public String creator;
    public Instance withCreator(String creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customGpuDriverPath")
    public String customGpuDriverPath;
    public Instance withCustomGpuDriverPath(String customGpuDriverPath) {
        this.customGpuDriverPath = customGpuDriverPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDiskSizeGb")
    public String dataDiskSizeGb;
    public Instance withDataDiskSizeGb(String dataDiskSizeGb) {
        this.dataDiskSizeGb = dataDiskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDiskType")
    public InstanceDataDiskTypeEnum dataDiskType;
    public Instance withDataDiskType(InstanceDataDiskTypeEnum dataDiskType) {
        this.dataDiskType = dataDiskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskEncryption")
    public InstanceDiskEncryptionEnum diskEncryption;
    public Instance withDiskEncryption(InstanceDiskEncryptionEnum diskEncryption) {
        this.diskEncryption = diskEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disks")
    public Disk[] disks;
    public Instance withDisks(Disk[] disks) {
        this.disks = disks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installGpuDriver")
    public Boolean installGpuDriver;
    public Instance withInstallGpuDriver(Boolean installGpuDriver) {
        this.installGpuDriver = installGpuDriver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceOwners")
    public String[] instanceOwners;
    public Instance withInstanceOwners(String[] instanceOwners) {
        this.instanceOwners = instanceOwners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKey")
    public String kmsKey;
    public Instance withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Instance withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public Instance withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public Instance withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Instance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public Instance withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nicType")
    public InstanceNicTypeEnum nicType;
    public Instance withNicType(InstanceNicTypeEnum nicType) {
        this.nicType = nicType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noProxyAccess")
    public Boolean noProxyAccess;
    public Instance withNoProxyAccess(Boolean noProxyAccess) {
        this.noProxyAccess = noProxyAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noPublicIp")
    public Boolean noPublicIp;
    public Instance withNoPublicIp(Boolean noPublicIp) {
        this.noPublicIp = noPublicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noRemoveDataDisk")
    public Boolean noRemoveDataDisk;
    public Instance withNoRemoveDataDisk(Boolean noRemoveDataDisk) {
        this.noRemoveDataDisk = noRemoveDataDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postStartupScript")
    public String postStartupScript;
    public Instance withPostStartupScript(String postStartupScript) {
        this.postStartupScript = postStartupScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxyUri")
    public String proxyUri;
    public Instance withProxyUri(String proxyUri) {
        this.proxyUri = proxyUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservationAffinity")
    public ReservationAffinity reservationAffinity;
    public Instance withReservationAffinity(ReservationAffinity reservationAffinity) {
        this.reservationAffinity = reservationAffinity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public Instance withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountScopes")
    public String[] serviceAccountScopes;
    public Instance withServiceAccountScopes(String[] serviceAccountScopes) {
        this.serviceAccountScopes = serviceAccountScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shieldedInstanceConfig")
    public ShieldedInstanceConfig shieldedInstanceConfig;
    public Instance withShieldedInstanceConfig(ShieldedInstanceConfig shieldedInstanceConfig) {
        this.shieldedInstanceConfig = shieldedInstanceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public InstanceStateEnum state;
    public Instance withState(InstanceStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public Instance withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Instance withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Instance withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeHistory")
    public UpgradeHistoryEntry[] upgradeHistory;
    public Instance withUpgradeHistory(UpgradeHistoryEntry[] upgradeHistory) {
        this.upgradeHistory = upgradeHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmImage")
    public VmImage vmImage;
    public Instance withVmImage(VmImage vmImage) {
        this.vmImage = vmImage;
        return this;
    }
}