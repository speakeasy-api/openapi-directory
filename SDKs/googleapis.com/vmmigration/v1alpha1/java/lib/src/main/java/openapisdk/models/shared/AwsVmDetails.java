package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsVmDetails
 * AwsVmDetails describes a VM in AWS.
**/
public class AwsVmDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architecture")
    public AwsVmDetailsArchitectureEnum architecture;
    public AwsVmDetails withArchitecture(AwsVmDetailsArchitectureEnum architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootOption")
    public AwsVmDetailsBootOptionEnum bootOption;
    public AwsVmDetails withBootOption(AwsVmDetailsBootOptionEnum bootOption) {
        this.bootOption = bootOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committedStorageMb")
    public String committedStorageMb;
    public AwsVmDetails withCommittedStorageMb(String committedStorageMb) {
        this.committedStorageMb = committedStorageMb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuCount")
    public Integer cpuCount;
    public AwsVmDetails withCpuCount(Integer cpuCount) {
        this.cpuCount = cpuCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskCount")
    public Integer diskCount;
    public AwsVmDetails withDiskCount(Integer diskCount) {
        this.diskCount = diskCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AwsVmDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceType")
    public String instanceType;
    public AwsVmDetails withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryMb")
    public Integer memoryMb;
    public AwsVmDetails withMemoryMb(Integer memoryMb) {
        this.memoryMb = memoryMb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osDescription")
    public String osDescription;
    public AwsVmDetails withOsDescription(String osDescription) {
        this.osDescription = osDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("powerState")
    public AwsVmDetailsPowerStateEnum powerState;
    public AwsVmDetails withPowerState(AwsVmDetailsPowerStateEnum powerState) {
        this.powerState = powerState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroups")
    public AwsSecurityGroup[] securityGroups;
    public AwsVmDetails withSecurityGroups(AwsSecurityGroup[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceDescription")
    public String sourceDescription;
    public AwsVmDetails withSourceDescription(String sourceDescription) {
        this.sourceDescription = sourceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceId")
    public String sourceId;
    public AwsVmDetails withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public AwsVmDetails withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualizationType")
    public AwsVmDetailsVirtualizationTypeEnum virtualizationType;
    public AwsVmDetails withVirtualizationType(AwsVmDetailsVirtualizationTypeEnum virtualizationType) {
        this.virtualizationType = virtualizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmId")
    public String vmId;
    public AwsVmDetails withVmId(String vmId) {
        this.vmId = vmId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcId")
    public String vpcId;
    public AwsVmDetails withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public AwsVmDetails withZone(String zone) {
        this.zone = zone;
        return this;
    }
}