package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisioningQuota
 * A provisioning quota for a given project.
**/
public class ProvisioningQuota {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetType")
    public ProvisioningQuotaAssetTypeEnum assetType;
    public ProvisioningQuota withAssetType(ProvisioningQuotaAssetTypeEnum assetType) {
        this.assetType = assetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableCount")
    public Integer availableCount;
    public ProvisioningQuota withAvailableCount(Integer availableCount) {
        this.availableCount = availableCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcpService")
    public String gcpService;
    public ProvisioningQuota withGcpService(String gcpService) {
        this.gcpService = gcpService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceQuota")
    public InstanceQuota instanceQuota;
    public ProvisioningQuota withInstanceQuota(InstanceQuota instanceQuota) {
        this.instanceQuota = instanceQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ProvisioningQuota withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProvisioningQuota withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkBandwidth")
    public String networkBandwidth;
    public ProvisioningQuota withNetworkBandwidth(String networkBandwidth) {
        this.networkBandwidth = networkBandwidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCount")
    public String serverCount;
    public ProvisioningQuota withServerCount(String serverCount) {
        this.serverCount = serverCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageGib")
    public String storageGib;
    public ProvisioningQuota withStorageGib(String storageGib) {
        this.storageGib = storageGib;
        return this;
    }
}