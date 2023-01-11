package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Creative
 * A creative and its classification data.
**/
public class Creative {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HTMLSnippet")
    public String htmlSnippet;
    public Creative withHtmlSnippet(String htmlSnippet) {
        this.htmlSnippet = htmlSnippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Integer accountId;
    public Creative withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adChoicesDestinationUrl")
    public String adChoicesDestinationUrl;
    public Creative withAdChoicesDestinationUrl(String adChoicesDestinationUrl) {
        this.adChoicesDestinationUrl = adChoicesDestinationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adTechnologyProviders")
    public CreativeAdTechnologyProviders adTechnologyProviders;
    public Creative withAdTechnologyProviders(CreativeAdTechnologyProviders adTechnologyProviders) {
        this.adTechnologyProviders = adTechnologyProviders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String[] advertiserId;
    public Creative withAdvertiserId(String[] advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserName")
    public String advertiserName;
    public Creative withAdvertiserName(String advertiserName) {
        this.advertiserName = advertiserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agencyId")
    public String agencyId;
    public Creative withAgencyId(String agencyId) {
        this.agencyId = agencyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("apiUploadTimestamp")
    public OffsetDateTime apiUploadTimestamp;
    public Creative withApiUploadTimestamp(OffsetDateTime apiUploadTimestamp) {
        this.apiUploadTimestamp = apiUploadTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public Integer[] attribute;
    public Creative withAttribute(Integer[] attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerCreativeId")
    public String buyerCreativeId;
    public Creative withBuyerCreativeId(String buyerCreativeId) {
        this.buyerCreativeId = buyerCreativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrl")
    public String[] clickThroughUrl;
    public Creative withClickThroughUrl(String[] clickThroughUrl) {
        this.clickThroughUrl = clickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corrections")
    public CreativeCorrections[] corrections;
    public Creative withCorrections(CreativeCorrections[] corrections) {
        this.corrections = corrections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeStatusIdentityType")
    public String creativeStatusIdentityType;
    public Creative withCreativeStatusIdentityType(String creativeStatusIdentityType) {
        this.creativeStatusIdentityType = creativeStatusIdentityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealsStatus")
    public String dealsStatus;
    public Creative withDealsStatus(String dealsStatus) {
        this.dealsStatus = dealsStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedDomains")
    public String[] detectedDomains;
    public Creative withDetectedDomains(String[] detectedDomains) {
        this.detectedDomains = detectedDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filteringReasons")
    public CreativeFilteringReasons filteringReasons;
    public Creative withFilteringReasons(CreativeFilteringReasons filteringReasons) {
        this.filteringReasons = filteringReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public Creative withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionTrackingUrl")
    public String[] impressionTrackingUrl;
    public Creative withImpressionTrackingUrl(String[] impressionTrackingUrl) {
        this.impressionTrackingUrl = impressionTrackingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Creative withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String[] languages;
    public Creative withLanguages(String[] languages) {
        this.languages = languages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nativeAd")
    public CreativeNativeAd nativeAd;
    public Creative withNativeAd(CreativeNativeAd nativeAd) {
        this.nativeAd = nativeAd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openAuctionStatus")
    public String openAuctionStatus;
    public Creative withOpenAuctionStatus(String openAuctionStatus) {
        this.openAuctionStatus = openAuctionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCategories")
    public Integer[] productCategories;
    public Creative withProductCategories(Integer[] productCategories) {
        this.productCategories = productCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedCategories")
    public Integer[] restrictedCategories;
    public Creative withRestrictedCategories(Integer[] restrictedCategories) {
        this.restrictedCategories = restrictedCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitiveCategories")
    public Integer[] sensitiveCategories;
    public Creative withSensitiveCategories(Integer[] sensitiveCategories) {
        this.sensitiveCategories = sensitiveCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servingRestrictions")
    public CreativeServingRestrictions[] servingRestrictions;
    public Creative withServingRestrictions(CreativeServingRestrictions[] servingRestrictions) {
        this.servingRestrictions = servingRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendorType")
    public Integer[] vendorType;
    public Creative withVendorType(Integer[] vendorType) {
        this.vendorType = vendorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public Creative withVersion(Integer version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoURL")
    public String videoURL;
    public Creative withVideoUrl(String videoURL) {
        this.videoURL = videoURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoVastXML")
    public String videoVastXML;
    public Creative withVideoVastXml(String videoVastXML) {
        this.videoVastXML = videoVastXML;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public Creative withWidth(Integer width) {
        this.width = width;
        return this;
    }
}