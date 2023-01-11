package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SiteSettings
 * Site Settings
**/
public class SiteSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeViewOptOut")
    public Boolean activeViewOptOut;
    public SiteSettings withActiveViewOptOut(Boolean activeViewOptOut) {
        this.activeViewOptOut = activeViewOptOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adBlockingOptOut")
    public Boolean adBlockingOptOut;
    public SiteSettings withAdBlockingOptOut(Boolean adBlockingOptOut) {
        this.adBlockingOptOut = adBlockingOptOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableNewCookie")
    public Boolean disableNewCookie;
    public SiteSettings withDisableNewCookie(Boolean disableNewCookie) {
        this.disableNewCookie = disableNewCookie;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagSetting")
    public TagSetting tagSetting;
    public SiteSettings withTagSetting(TagSetting tagSetting) {
        this.tagSetting = tagSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoActiveViewOptOutTemplate")
    public Boolean videoActiveViewOptOutTemplate;
    public SiteSettings withVideoActiveViewOptOutTemplate(Boolean videoActiveViewOptOutTemplate) {
        this.videoActiveViewOptOutTemplate = videoActiveViewOptOutTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpaidAdapterChoiceTemplate")
    public SiteSettingsVpaidAdapterChoiceTemplateEnum vpaidAdapterChoiceTemplate;
    public SiteSettings withVpaidAdapterChoiceTemplate(SiteSettingsVpaidAdapterChoiceTemplateEnum vpaidAdapterChoiceTemplate) {
        this.vpaidAdapterChoiceTemplate = vpaidAdapterChoiceTemplate;
        return this;
    }
}