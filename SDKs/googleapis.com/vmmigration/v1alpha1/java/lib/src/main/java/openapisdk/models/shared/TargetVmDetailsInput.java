package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetVmDetailsInput
 * TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
public class TargetVmDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedLicense")
    public AppliedLicense appliedLicense;
    public TargetVmDetailsInput withAppliedLicense(AppliedLicense appliedLicense) {
        this.appliedLicense = appliedLicense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeScheduling")
    public ComputeScheduling computeScheduling;
    public TargetVmDetailsInput withComputeScheduling(ComputeScheduling computeScheduling) {
        this.computeScheduling = computeScheduling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskType")
    public TargetVmDetailsDiskTypeEnum diskType;
    public TargetVmDetailsInput withDiskType(TargetVmDetailsDiskTypeEnum diskType) {
        this.diskType = diskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalIp")
    public String externalIp;
    public TargetVmDetailsInput withExternalIp(String externalIp) {
        this.externalIp = externalIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalIp")
    public String internalIp;
    public TargetVmDetailsInput withInternalIp(String internalIp) {
        this.internalIp = internalIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public TargetVmDetailsInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseType")
    public TargetVmDetailsLicenseTypeEnum licenseType;
    public TargetVmDetailsInput withLicenseType(TargetVmDetailsLicenseTypeEnum licenseType) {
        this.licenseType = licenseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public TargetVmDetailsInput withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineTypeSeries")
    public String machineTypeSeries;
    public TargetVmDetailsInput withMachineTypeSeries(String machineTypeSeries) {
        this.machineTypeSeries = machineTypeSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public TargetVmDetailsInput withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TargetVmDetailsInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public TargetVmDetailsInput withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaces")
    public NetworkInterface[] networkInterfaces;
    public TargetVmDetailsInput withNetworkInterfaces(NetworkInterface[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTags")
    public String[] networkTags;
    public TargetVmDetailsInput withNetworkTags(String[] networkTags) {
        this.networkTags = networkTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secureBoot")
    public Boolean secureBoot;
    public TargetVmDetailsInput withSecureBoot(Boolean secureBoot) {
        this.secureBoot = secureBoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public TargetVmDetailsInput withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetwork")
    public String subnetwork;
    public TargetVmDetailsInput withSubnetwork(String subnetwork) {
        this.subnetwork = subnetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetProject")
    public String targetProject;
    public TargetVmDetailsInput withTargetProject(String targetProject) {
        this.targetProject = targetProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public TargetVmDetailsInput withZone(String zone) {
        this.zone = zone;
        return this;
    }
}