package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Advertiser
 * A single advertiser in Display & Video 360 (DV360).
**/
public class Advertiser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adServerConfig")
    public AdvertiserAdServerConfig adServerConfig;
    public Advertiser withAdServerConfig(AdvertiserAdServerConfig adServerConfig) {
        this.adServerConfig = adServerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public Advertiser withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingConfig")
    public AdvertiserBillingConfig billingConfig;
    public Advertiser withBillingConfig(AdvertiserBillingConfig billingConfig) {
        this.billingConfig = billingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeConfig")
    public AdvertiserCreativeConfig creativeConfig;
    public Advertiser withCreativeConfig(AdvertiserCreativeConfig creativeConfig) {
        this.creativeConfig = creativeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataAccessConfig")
    public AdvertiserDataAccessConfig dataAccessConfig;
    public Advertiser withDataAccessConfig(AdvertiserDataAccessConfig dataAccessConfig) {
        this.dataAccessConfig = dataAccessConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Advertiser withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public AdvertiserEntityStatusEnum entityStatus;
    public Advertiser withEntityStatus(AdvertiserEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generalConfig")
    public AdvertiserGeneralConfig generalConfig;
    public Advertiser withGeneralConfig(AdvertiserGeneralConfig generalConfig) {
        this.generalConfig = generalConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationDetails")
    public IntegrationDetails integrationDetails;
    public Advertiser withIntegrationDetails(IntegrationDetails integrationDetails) {
        this.integrationDetails = integrationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Advertiser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public Advertiser withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prismaEnabled")
    public Boolean prismaEnabled;
    public Advertiser withPrismaEnabled(Boolean prismaEnabled) {
        this.prismaEnabled = prismaEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servingConfig")
    public AdvertiserTargetingConfig servingConfig;
    public Advertiser withServingConfig(AdvertiserTargetingConfig servingConfig) {
        this.servingConfig = servingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Advertiser withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}