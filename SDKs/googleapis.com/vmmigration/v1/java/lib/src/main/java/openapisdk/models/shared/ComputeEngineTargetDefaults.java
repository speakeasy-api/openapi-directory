package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeEngineTargetDefaults
 * ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
**/
public class ComputeEngineTargetDefaults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalLicenses")
    public String[] additionalLicenses;
    public ComputeEngineTargetDefaults withAdditionalLicenses(String[] additionalLicenses) {
        this.additionalLicenses = additionalLicenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedLicense")
    public AppliedLicense appliedLicense;
    public ComputeEngineTargetDefaults withAppliedLicense(AppliedLicense appliedLicense) {
        this.appliedLicense = appliedLicense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootOption")
    public ComputeEngineTargetDefaultsBootOptionEnum bootOption;
    public ComputeEngineTargetDefaults withBootOption(ComputeEngineTargetDefaultsBootOptionEnum bootOption) {
        this.bootOption = bootOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeScheduling")
    public ComputeScheduling computeScheduling;
    public ComputeEngineTargetDefaults withComputeScheduling(ComputeScheduling computeScheduling) {
        this.computeScheduling = computeScheduling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskType")
    public ComputeEngineTargetDefaultsDiskTypeEnum diskType;
    public ComputeEngineTargetDefaults withDiskType(ComputeEngineTargetDefaultsDiskTypeEnum diskType) {
        this.diskType = diskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public ComputeEngineTargetDefaults withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ComputeEngineTargetDefaults withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseType")
    public ComputeEngineTargetDefaultsLicenseTypeEnum licenseType;
    public ComputeEngineTargetDefaults withLicenseType(ComputeEngineTargetDefaultsLicenseTypeEnum licenseType) {
        this.licenseType = licenseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public ComputeEngineTargetDefaults withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineTypeSeries")
    public String machineTypeSeries;
    public ComputeEngineTargetDefaults withMachineTypeSeries(String machineTypeSeries) {
        this.machineTypeSeries = machineTypeSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public ComputeEngineTargetDefaults withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaces")
    public NetworkInterface[] networkInterfaces;
    public ComputeEngineTargetDefaults withNetworkInterfaces(NetworkInterface[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTags")
    public String[] networkTags;
    public ComputeEngineTargetDefaults withNetworkTags(String[] networkTags) {
        this.networkTags = networkTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secureBoot")
    public Boolean secureBoot;
    public ComputeEngineTargetDefaults withSecureBoot(Boolean secureBoot) {
        this.secureBoot = secureBoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public ComputeEngineTargetDefaults withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetProject")
    public String targetProject;
    public ComputeEngineTargetDefaults withTargetProject(String targetProject) {
        this.targetProject = targetProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmName")
    public String vmName;
    public ComputeEngineTargetDefaults withVmName(String vmName) {
        this.vmName = vmName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public ComputeEngineTargetDefaults withZone(String zone) {
        this.zone = zone;
        return this;
    }
}