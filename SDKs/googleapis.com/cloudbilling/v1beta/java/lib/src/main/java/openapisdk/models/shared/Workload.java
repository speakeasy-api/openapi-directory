package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Workload
 * Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed.
**/
public class Workload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudCdnEgressWorkload")
    public CloudCdnEgressWorkload cloudCdnEgressWorkload;
    public Workload withCloudCdnEgressWorkload(CloudCdnEgressWorkload cloudCdnEgressWorkload) {
        this.cloudCdnEgressWorkload = cloudCdnEgressWorkload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudCdnWorkload")
    public CloudCdnWorkload cloudCdnWorkload;
    public Workload withCloudCdnWorkload(CloudCdnWorkload cloudCdnWorkload) {
        this.cloudCdnWorkload = cloudCdnWorkload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudInterconnectEgressWorkload")
    public CloudInterconnectEgressWorkload cloudInterconnectEgressWorkload;
    public Workload withCloudInterconnectEgressWorkload(CloudInterconnectEgressWorkload cloudInterconnectEgressWorkload) {
        this.cloudInterconnectEgressWorkload = cloudInterconnectEgressWorkload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudInterconnectWorkload")
    public CloudInterconnectWorkload cloudInterconnectWorkload;
    public Workload withCloudInterconnectWorkload(CloudInterconnectWorkload cloudInterconnectWorkload) {
        this.cloudInterconnectWorkload = cloudInterconnectWorkload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudStorageEgressWorkload")
    public CloudStorageEgressWorkload cloudStorageEgressWorkload;
    public Workload withCloudStorageEgressWorkload(CloudStorageEgressWorkload cloudStorageEgressWorkload) {
        this.cloudStorageEgressWorkload = cloudStorageEgressWorkload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudStorageWorkload")
    public CloudStorageWorkload cloudStorageWorkload;
    public Workload withCloudStorageWorkload(CloudStorageWorkload cloudStorageWorkload) {
        this.cloudStorageWorkload = cloudStorageWorkload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeVmWorkload")
    public ComputeVmWorkload computeVmWorkload;
    public Workload withComputeVmWorkload(ComputeVmWorkload computeVmWorkload) {
        this.computeVmWorkload = computeVmWorkload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Workload withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premiumTierEgressWorkload")
    public PremiumTierEgressWorkload premiumTierEgressWorkload;
    public Workload withPremiumTierEgressWorkload(PremiumTierEgressWorkload premiumTierEgressWorkload) {
        this.premiumTierEgressWorkload = premiumTierEgressWorkload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardTierEgressWorkload")
    public StandardTierEgressWorkload standardTierEgressWorkload;
    public Workload withStandardTierEgressWorkload(StandardTierEgressWorkload standardTierEgressWorkload) {
        this.standardTierEgressWorkload = standardTierEgressWorkload;
        return this;
    }
}