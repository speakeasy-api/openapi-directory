package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Creative
 * A creative and its classification data.
**/
public class Creative {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Creative withAccountId(String accountId) {
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
    public AdTechnologyProviders adTechnologyProviders;
    public Creative withAdTechnologyProviders(AdTechnologyProviders adTechnologyProviders) {
        this.adTechnologyProviders = adTechnologyProviders;
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
    @JsonProperty("apiUpdateTime")
    public String apiUpdateTime;
    public Creative withApiUpdateTime(String apiUpdateTime) {
        this.apiUpdateTime = apiUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public CreativeAttributesEnum[] attributes;
    public Creative withAttributes(CreativeAttributesEnum[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrls")
    public String[] clickThroughUrls;
    public Creative withClickThroughUrls(String[] clickThroughUrls) {
        this.clickThroughUrls = clickThroughUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corrections")
    public Correction[] corrections;
    public Creative withCorrections(Correction[] corrections) {
        this.corrections = corrections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeId")
    public String creativeId;
    public Creative withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealsStatus")
    public CreativeDealsStatusEnum dealsStatus;
    public Creative withDealsStatus(CreativeDealsStatusEnum dealsStatus) {
        this.dealsStatus = dealsStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("declaredClickThroughUrls")
    public String[] declaredClickThroughUrls;
    public Creative withDeclaredClickThroughUrls(String[] declaredClickThroughUrls) {
        this.declaredClickThroughUrls = declaredClickThroughUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedAdvertiserIds")
    public String[] detectedAdvertiserIds;
    public Creative withDetectedAdvertiserIds(String[] detectedAdvertiserIds) {
        this.detectedAdvertiserIds = detectedAdvertiserIds;
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
    @JsonProperty("detectedLanguages")
    public String[] detectedLanguages;
    public Creative withDetectedLanguages(String[] detectedLanguages) {
        this.detectedLanguages = detectedLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedProductCategories")
    public Integer[] detectedProductCategories;
    public Creative withDetectedProductCategories(Integer[] detectedProductCategories) {
        this.detectedProductCategories = detectedProductCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedSensitiveCategories")
    public Integer[] detectedSensitiveCategories;
    public Creative withDetectedSensitiveCategories(Integer[] detectedSensitiveCategories) {
        this.detectedSensitiveCategories = detectedSensitiveCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html")
    public HtmlContent html;
    public Creative withHtml(HtmlContent html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionTrackingUrls")
    public String[] impressionTrackingUrls;
    public Creative withImpressionTrackingUrls(String[] impressionTrackingUrls) {
        this.impressionTrackingUrls = impressionTrackingUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("native")
    public NativeContent native_;
    public Creative withNative(NativeContent native_) {
        this.native_ = native_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openAuctionStatus")
    public CreativeOpenAuctionStatusEnum openAuctionStatus;
    public Creative withOpenAuctionStatus(CreativeOpenAuctionStatusEnum openAuctionStatus) {
        this.openAuctionStatus = openAuctionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedCategories")
    public CreativeRestrictedCategoriesEnum[] restrictedCategories;
    public Creative withRestrictedCategories(CreativeRestrictedCategoriesEnum[] restrictedCategories) {
        this.restrictedCategories = restrictedCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servingRestrictions")
    public ServingRestriction[] servingRestrictions;
    public Creative withServingRestrictions(ServingRestriction[] servingRestrictions) {
        this.servingRestrictions = servingRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendorIds")
    public Integer[] vendorIds;
    public Creative withVendorIds(Integer[] vendorIds) {
        this.vendorIds = vendorIds;
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
    @JsonProperty("video")
    public VideoContent video;
    public Creative withVideo(VideoContent video) {
        this.video = video;
        return this;
    }
}