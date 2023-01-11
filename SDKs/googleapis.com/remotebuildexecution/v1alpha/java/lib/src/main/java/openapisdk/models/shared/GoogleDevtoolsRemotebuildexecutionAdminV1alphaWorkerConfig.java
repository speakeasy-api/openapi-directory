package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig
 * Defines the configuration to be used for creating workers in the worker pool.
**/
public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accelerator")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig accelerator;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig withAccelerator(GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig accelerator) {
        this.accelerator = accelerator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSizeGb")
    public String diskSizeGb;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig withDiskSizeGb(String diskSizeGb) {
        this.diskSizeGb = diskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskType")
    public String diskType;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig withDiskType(String diskType) {
        this.diskType = diskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxConcurrentActions")
    public String maxConcurrentActions;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig withMaxConcurrentActions(String maxConcurrentActions) {
        this.maxConcurrentActions = maxConcurrentActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minCpuPlatform")
    public String minCpuPlatform;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig withMinCpuPlatform(String minCpuPlatform) {
        this.minCpuPlatform = minCpuPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkAccess")
    public String networkAccess;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig withNetworkAccess(String networkAccess) {
        this.networkAccess = networkAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reserved")
    public Boolean reserved;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig withReserved(Boolean reserved) {
        this.reserved = reserved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soleTenantNodeType")
    public String soleTenantNodeType;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig withSoleTenantNodeType(String soleTenantNodeType) {
        this.soleTenantNodeType = soleTenantNodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmImage")
    public String vmImage;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig withVmImage(String vmImage) {
        this.vmImage = vmImage;
        return this;
    }
}