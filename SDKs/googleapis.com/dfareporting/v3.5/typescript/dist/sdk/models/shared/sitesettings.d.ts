import { SpeakeasyBase } from "../../../internal/utils";
import { TagSetting } from "./tagsetting";
/**
 * Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher's specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter). *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
 */
export declare enum SiteSettingsVpaidAdapterChoiceTemplateEnum {
    Default = "DEFAULT",
    Flash = "FLASH",
    Html5 = "HTML5",
    Both = "BOTH"
}
/**
 * Site Settings
 */
export declare class SiteSettings extends SpeakeasyBase {
    /**
     * Whether active view creatives are disabled for this site.
     */
    activeViewOptOut?: boolean;
    /**
     * Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement settings. When false, the campaign and placement settings take effect.
     */
    adBlockingOptOut?: boolean;
    /**
     * Whether new cookies are disabled for this site.
     */
    disableNewCookie?: boolean;
    /**
     * Tag Settings
     */
    tagSetting?: TagSetting;
    /**
     * Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement.
     */
    videoActiveViewOptOutTemplate?: boolean;
    /**
     * Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher's specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter). *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
     */
    vpaidAdapterChoiceTemplate?: SiteSettingsVpaidAdapterChoiceTemplateEnum;
}
