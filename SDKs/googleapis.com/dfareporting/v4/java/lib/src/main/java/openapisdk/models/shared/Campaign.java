package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Campaign
 * Contains properties of a Campaign Manager campaign.
**/
public class Campaign {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Campaign withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adBlockingConfiguration")
    public AdBlockingConfiguration adBlockingConfiguration;
    public Campaign withAdBlockingConfiguration(AdBlockingConfiguration adBlockingConfiguration) {
        this.adBlockingConfiguration = adBlockingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalCreativeOptimizationConfigurations")
    public CreativeOptimizationConfiguration[] additionalCreativeOptimizationConfigurations;
    public Campaign withAdditionalCreativeOptimizationConfigurations(CreativeOptimizationConfiguration[] additionalCreativeOptimizationConfigurations) {
        this.additionalCreativeOptimizationConfigurations = additionalCreativeOptimizationConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserGroupId")
    public String advertiserGroupId;
    public Campaign withAdvertiserGroupId(String advertiserGroupId) {
        this.advertiserGroupId = advertiserGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public Campaign withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;
    public Campaign withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public Campaign withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceSegmentGroups")
    public AudienceSegmentGroup[] audienceSegmentGroups;
    public Campaign withAudienceSegmentGroups(AudienceSegmentGroup[] audienceSegmentGroups) {
        this.audienceSegmentGroups = audienceSegmentGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingInvoiceCode")
    public String billingInvoiceCode;
    public Campaign withBillingInvoiceCode(String billingInvoiceCode) {
        this.billingInvoiceCode = billingInvoiceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrlSuffixProperties")
    public ClickThroughUrlSuffixProperties clickThroughUrlSuffixProperties;
    public Campaign withClickThroughUrlSuffixProperties(ClickThroughUrlSuffixProperties clickThroughUrlSuffixProperties) {
        this.clickThroughUrlSuffixProperties = clickThroughUrlSuffixProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public Campaign withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createInfo")
    public LastModifiedInfo createInfo;
    public Campaign withCreateInfo(LastModifiedInfo createInfo) {
        this.createInfo = createInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeGroupIds")
    public String[] creativeGroupIds;
    public Campaign withCreativeGroupIds(String[] creativeGroupIds) {
        this.creativeGroupIds = creativeGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeOptimizationConfiguration")
    public CreativeOptimizationConfiguration creativeOptimizationConfiguration;
    public Campaign withCreativeOptimizationConfiguration(CreativeOptimizationConfiguration creativeOptimizationConfiguration) {
        this.creativeOptimizationConfiguration = creativeOptimizationConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultClickThroughEventTagProperties")
    public DefaultClickThroughEventTagProperties defaultClickThroughEventTagProperties;
    public Campaign withDefaultClickThroughEventTagProperties(DefaultClickThroughEventTagProperties defaultClickThroughEventTagProperties) {
        this.defaultClickThroughEventTagProperties = defaultClickThroughEventTagProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLandingPageId")
    public String defaultLandingPageId;
    public Campaign withDefaultLandingPageId(String defaultLandingPageId) {
        this.defaultLandingPageId = defaultLandingPageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public Campaign withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTagOverrides")
    public EventTagOverride[] eventTagOverrides;
    public Campaign withEventTagOverrides(EventTagOverride[] eventTagOverrides) {
        this.eventTagOverrides = eventTagOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public Campaign withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Campaign withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public Campaign withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Campaign withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedInfo")
    public LastModifiedInfo lastModifiedInfo;
    public Campaign withLastModifiedInfo(LastModifiedInfo lastModifiedInfo) {
        this.lastModifiedInfo = lastModifiedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementPartnerLink")
    public MeasurementPartnerCampaignLink measurementPartnerLink;
    public Campaign withMeasurementPartnerLink(MeasurementPartnerCampaignLink measurementPartnerLink) {
        this.measurementPartnerLink = measurementPartnerLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Campaign withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public Campaign withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public Campaign withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
}