package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserInput
 * A single advertiser in Display & Video 360 (DV360).
**/
public class AdvertiserInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adServerConfig")
    public AdvertiserAdServerConfig adServerConfig;
    public AdvertiserInput withAdServerConfig(AdvertiserAdServerConfig adServerConfig) {
        this.adServerConfig = adServerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingConfig")
    public AdvertiserBillingConfig billingConfig;
    public AdvertiserInput withBillingConfig(AdvertiserBillingConfig billingConfig) {
        this.billingConfig = billingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeConfig")
    public AdvertiserCreativeConfig creativeConfig;
    public AdvertiserInput withCreativeConfig(AdvertiserCreativeConfig creativeConfig) {
        this.creativeConfig = creativeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataAccessConfig")
    public AdvertiserDataAccessConfig dataAccessConfig;
    public AdvertiserInput withDataAccessConfig(AdvertiserDataAccessConfig dataAccessConfig) {
        this.dataAccessConfig = dataAccessConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AdvertiserInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public AdvertiserEntityStatusEnum entityStatus;
    public AdvertiserInput withEntityStatus(AdvertiserEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generalConfig")
    public AdvertiserGeneralConfigInput generalConfig;
    public AdvertiserInput withGeneralConfig(AdvertiserGeneralConfigInput generalConfig) {
        this.generalConfig = generalConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationDetails")
    public IntegrationDetails integrationDetails;
    public AdvertiserInput withIntegrationDetails(IntegrationDetails integrationDetails) {
        this.integrationDetails = integrationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public AdvertiserInput withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prismaEnabled")
    public Boolean prismaEnabled;
    public AdvertiserInput withPrismaEnabled(Boolean prismaEnabled) {
        this.prismaEnabled = prismaEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servingConfig")
    public AdvertiserTargetingConfig servingConfig;
    public AdvertiserInput withServingConfig(AdvertiserTargetingConfig servingConfig) {
        this.servingConfig = servingConfig;
        return this;
    }
}