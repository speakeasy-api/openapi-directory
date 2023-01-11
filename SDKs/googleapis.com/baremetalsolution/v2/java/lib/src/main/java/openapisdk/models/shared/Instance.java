package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Instance
 * A server.
**/
public class Instance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Instance withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hyperthreadingEnabled")
    public Boolean hyperthreadingEnabled;
    public Instance withHyperthreadingEnabled(Boolean hyperthreadingEnabled) {
        this.hyperthreadingEnabled = hyperthreadingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Instance withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interactiveSerialConsoleEnabled")
    public Boolean interactiveSerialConsoleEnabled;
    public Instance withInteractiveSerialConsoleEnabled(Boolean interactiveSerialConsoleEnabled) {
        this.interactiveSerialConsoleEnabled = interactiveSerialConsoleEnabled;
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
    @JsonProperty("logicalInterfaces")
    public GoogleCloudBaremetalsolutionV2LogicalInterface[] logicalInterfaces;
    public Instance withLogicalInterfaces(GoogleCloudBaremetalsolutionV2LogicalInterface[] logicalInterfaces) {
        this.logicalInterfaces = logicalInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginInfo")
    public String loginInfo;
    public Instance withLoginInfo(String loginInfo) {
        this.loginInfo = loginInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("luns")
    public Lun[] luns;
    public Instance withLuns(Lun[] luns) {
        this.luns = luns;
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
    @JsonProperty("name")
    public String name;
    public Instance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTemplate")
    public String networkTemplate;
    public Instance withNetworkTemplate(String networkTemplate) {
        this.networkTemplate = networkTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public Network[] networks;
    public Instance withNetworks(Network[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osImage")
    public String osImage;
    public Instance withOsImage(String osImage) {
        this.osImage = osImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pod")
    public String pod;
    public Instance withPod(String pod) {
        this.pod = pod;
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
    @JsonProperty("updateTime")
    public String updateTime;
    public Instance withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Volume[] volumes;
    public Instance withVolumes(Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadProfile")
    public InstanceWorkloadProfileEnum workloadProfile;
    public Instance withWorkloadProfile(InstanceWorkloadProfileEnum workloadProfile) {
        this.workloadProfile = workloadProfile;
        return this;
    }
}