package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeEngineTargetDetails
 * ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
public class ComputeEngineTargetDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalLicenses")
    public String[] additionalLicenses;
    public ComputeEngineTargetDetails withAdditionalLicenses(String[] additionalLicenses) {
        this.additionalLicenses = additionalLicenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedLicense")
    public AppliedLicense appliedLicense;
    public ComputeEngineTargetDetails withAppliedLicense(AppliedLicense appliedLicense) {
        this.appliedLicense = appliedLicense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootOption")
    public ComputeEngineTargetDetailsBootOptionEnum bootOption;
    public ComputeEngineTargetDetails withBootOption(ComputeEngineTargetDetailsBootOptionEnum bootOption) {
        this.bootOption = bootOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeScheduling")
    public ComputeScheduling computeScheduling;
    public ComputeEngineTargetDetails withComputeScheduling(ComputeScheduling computeScheduling) {
        this.computeScheduling = computeScheduling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskType")
    public ComputeEngineTargetDetailsDiskTypeEnum diskType;
    public ComputeEngineTargetDetails withDiskType(ComputeEngineTargetDetailsDiskTypeEnum diskType) {
        this.diskType = diskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public ComputeEngineTargetDetails withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ComputeEngineTargetDetails withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseType")
    public ComputeEngineTargetDetailsLicenseTypeEnum licenseType;
    public ComputeEngineTargetDetails withLicenseType(ComputeEngineTargetDetailsLicenseTypeEnum licenseType) {
        this.licenseType = licenseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public ComputeEngineTargetDetails withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineTypeSeries")
    public String machineTypeSeries;
    public ComputeEngineTargetDetails withMachineTypeSeries(String machineTypeSeries) {
        this.machineTypeSeries = machineTypeSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public ComputeEngineTargetDetails withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaces")
    public NetworkInterface[] networkInterfaces;
    public ComputeEngineTargetDetails withNetworkInterfaces(NetworkInterface[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTags")
    public String[] networkTags;
    public ComputeEngineTargetDetails withNetworkTags(String[] networkTags) {
        this.networkTags = networkTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public ComputeEngineTargetDetails withProject(String project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secureBoot")
    public Boolean secureBoot;
    public ComputeEngineTargetDetails withSecureBoot(Boolean secureBoot) {
        this.secureBoot = secureBoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public ComputeEngineTargetDetails withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmName")
    public String vmName;
    public ComputeEngineTargetDetails withVmName(String vmName) {
        this.vmName = vmName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public ComputeEngineTargetDetails withZone(String zone) {
        this.zone = zone;
        return this;
    }
}