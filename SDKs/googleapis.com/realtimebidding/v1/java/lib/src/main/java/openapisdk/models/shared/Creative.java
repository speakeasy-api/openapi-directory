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
    @JsonProperty("creativeFormat")
    public CreativeCreativeFormatEnum creativeFormat;
    public Creative withCreativeFormat(CreativeCreativeFormatEnum creativeFormat) {
        this.creativeFormat = creativeFormat;
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
    @JsonProperty("creativeServingDecision")
    public CreativeServingDecision creativeServingDecision;
    public Creative withCreativeServingDecision(CreativeServingDecision creativeServingDecision) {
        this.creativeServingDecision = creativeServingDecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealIds")
    public String[] dealIds;
    public Creative withDealIds(String[] dealIds) {
        this.dealIds = dealIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("declaredAttributes")
    public CreativeDeclaredAttributesEnum[] declaredAttributes;
    public Creative withDeclaredAttributes(CreativeDeclaredAttributesEnum[] declaredAttributes) {
        this.declaredAttributes = declaredAttributes;
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
    @JsonProperty("declaredRestrictedCategories")
    public CreativeDeclaredRestrictedCategoriesEnum[] declaredRestrictedCategories;
    public Creative withDeclaredRestrictedCategories(CreativeDeclaredRestrictedCategoriesEnum[] declaredRestrictedCategories) {
        this.declaredRestrictedCategories = declaredRestrictedCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("declaredVendorIds")
    public Integer[] declaredVendorIds;
    public Creative withDeclaredVendorIds(Integer[] declaredVendorIds) {
        this.declaredVendorIds = declaredVendorIds;
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
    @JsonProperty("name")
    public String name;
    public Creative withName(String name) {
        this.name = name;
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
    @JsonProperty("renderUrl")
    public String renderUrl;
    public Creative withRenderUrl(String renderUrl) {
        this.renderUrl = renderUrl;
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