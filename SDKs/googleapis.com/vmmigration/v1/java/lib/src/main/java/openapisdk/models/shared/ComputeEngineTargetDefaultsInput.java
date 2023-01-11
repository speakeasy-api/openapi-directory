package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeEngineTargetDefaultsInput
 * ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
**/
public class ComputeEngineTargetDefaultsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalLicenses")
    public String[] additionalLicenses;
    public ComputeEngineTargetDefaultsInput withAdditionalLicenses(String[] additionalLicenses) {
        this.additionalLicenses = additionalLicenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedLicense")
    public AppliedLicense appliedLicense;
    public ComputeEngineTargetDefaultsInput withAppliedLicense(AppliedLicense appliedLicense) {
        this.appliedLicense = appliedLicense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeScheduling")
    public ComputeScheduling computeScheduling;
    public ComputeEngineTargetDefaultsInput withComputeScheduling(ComputeScheduling computeScheduling) {
        this.computeScheduling = computeScheduling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskType")
    public ComputeEngineTargetDefaultsDiskTypeEnum diskType;
    public ComputeEngineTargetDefaultsInput withDiskType(ComputeEngineTargetDefaultsDiskTypeEnum diskType) {
        this.diskType = diskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public ComputeEngineTargetDefaultsInput withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ComputeEngineTargetDefaultsInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseType")
    public ComputeEngineTargetDefaultsLicenseTypeEnum licenseType;
    public ComputeEngineTargetDefaultsInput withLicenseType(ComputeEngineTargetDefaultsLicenseTypeEnum licenseType) {
        this.licenseType = licenseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public ComputeEngineTargetDefaultsInput withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineTypeSeries")
    public String machineTypeSeries;
    public ComputeEngineTargetDefaultsInput withMachineTypeSeries(String machineTypeSeries) {
        this.machineTypeSeries = machineTypeSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public ComputeEngineTargetDefaultsInput withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaces")
    public NetworkInterface[] networkInterfaces;
    public ComputeEngineTargetDefaultsInput withNetworkInterfaces(NetworkInterface[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTags")
    public String[] networkTags;
    public ComputeEngineTargetDefaultsInput withNetworkTags(String[] networkTags) {
        this.networkTags = networkTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secureBoot")
    public Boolean secureBoot;
    public ComputeEngineTargetDefaultsInput withSecureBoot(Boolean secureBoot) {
        this.secureBoot = secureBoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public ComputeEngineTargetDefaultsInput withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetProject")
    public String targetProject;
    public ComputeEngineTargetDefaultsInput withTargetProject(String targetProject) {
        this.targetProject = targetProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmName")
    public String vmName;
    public ComputeEngineTargetDefaultsInput withVmName(String vmName) {
        this.vmName = vmName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public ComputeEngineTargetDefaultsInput withZone(String zone) {
        this.zone = zone;
        return this;
    }
}