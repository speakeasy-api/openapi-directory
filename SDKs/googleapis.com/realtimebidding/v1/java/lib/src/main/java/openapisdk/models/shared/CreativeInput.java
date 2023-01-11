package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeInput
 * A creative and its classification data.
**/
public class CreativeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adChoicesDestinationUrl")
    public String adChoicesDestinationUrl;
    public CreativeInput withAdChoicesDestinationUrl(String adChoicesDestinationUrl) {
        this.adChoicesDestinationUrl = adChoicesDestinationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserName")
    public String advertiserName;
    public CreativeInput withAdvertiserName(String advertiserName) {
        this.advertiserName = advertiserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agencyId")
    public String agencyId;
    public CreativeInput withAgencyId(String agencyId) {
        this.agencyId = agencyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeId")
    public String creativeId;
    public CreativeInput withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeServingDecision")
    public CreativeServingDecision creativeServingDecision;
    public CreativeInput withCreativeServingDecision(CreativeServingDecision creativeServingDecision) {
        this.creativeServingDecision = creativeServingDecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("declaredAttributes")
    public CreativeDeclaredAttributesEnum[] declaredAttributes;
    public CreativeInput withDeclaredAttributes(CreativeDeclaredAttributesEnum[] declaredAttributes) {
        this.declaredAttributes = declaredAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("declaredClickThroughUrls")
    public String[] declaredClickThroughUrls;
    public CreativeInput withDeclaredClickThroughUrls(String[] declaredClickThroughUrls) {
        this.declaredClickThroughUrls = declaredClickThroughUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("declaredRestrictedCategories")
    public CreativeDeclaredRestrictedCategoriesEnum[] declaredRestrictedCategories;
    public CreativeInput withDeclaredRestrictedCategories(CreativeDeclaredRestrictedCategoriesEnum[] declaredRestrictedCategories) {
        this.declaredRestrictedCategories = declaredRestrictedCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("declaredVendorIds")
    public Integer[] declaredVendorIds;
    public CreativeInput withDeclaredVendorIds(Integer[] declaredVendorIds) {
        this.declaredVendorIds = declaredVendorIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html")
    public HtmlContent html;
    public CreativeInput withHtml(HtmlContent html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionTrackingUrls")
    public String[] impressionTrackingUrls;
    public CreativeInput withImpressionTrackingUrls(String[] impressionTrackingUrls) {
        this.impressionTrackingUrls = impressionTrackingUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("native")
    public NativeContent native_;
    public CreativeInput withNative(NativeContent native_) {
        this.native_ = native_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderUrl")
    public String renderUrl;
    public CreativeInput withRenderUrl(String renderUrl) {
        this.renderUrl = renderUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedCategories")
    public CreativeRestrictedCategoriesEnum[] restrictedCategories;
    public CreativeInput withRestrictedCategories(CreativeRestrictedCategoriesEnum[] restrictedCategories) {
        this.restrictedCategories = restrictedCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video")
    public VideoContent video;
    public CreativeInput withVideo(VideoContent video) {
        this.video = video;
        return this;
    }
}