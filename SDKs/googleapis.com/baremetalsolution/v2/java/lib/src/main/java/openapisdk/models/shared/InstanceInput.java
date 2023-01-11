package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceInput
 * A server.
**/
public class InstanceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hyperthreadingEnabled")
    public Boolean hyperthreadingEnabled;
    public InstanceInput withHyperthreadingEnabled(Boolean hyperthreadingEnabled) {
        this.hyperthreadingEnabled = hyperthreadingEnabled;
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
    @JsonProperty("logicalInterfaces")
    public GoogleCloudBaremetalsolutionV2LogicalInterface[] logicalInterfaces;
    public InstanceInput withLogicalInterfaces(GoogleCloudBaremetalsolutionV2LogicalInterface[] logicalInterfaces) {
        this.logicalInterfaces = logicalInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("luns")
    public LunInput[] luns;
    public InstanceInput withLuns(LunInput[] luns) {
        this.luns = luns;
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
    @JsonProperty("name")
    public String name;
    public InstanceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTemplate")
    public String networkTemplate;
    public InstanceInput withNetworkTemplate(String networkTemplate) {
        this.networkTemplate = networkTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osImage")
    public String osImage;
    public InstanceInput withOsImage(String osImage) {
        this.osImage = osImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pod")
    public String pod;
    public InstanceInput withPod(String pod) {
        this.pod = pod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public VolumeInput[] volumes;
    public InstanceInput withVolumes(VolumeInput[] volumes) {
        this.volumes = volumes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadProfile")
    public InstanceWorkloadProfileEnum workloadProfile;
    public InstanceInput withWorkloadProfile(InstanceWorkloadProfileEnum workloadProfile) {
        this.workloadProfile = workloadProfile;
        return this;
    }
}