import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { DirectorySiteSettings } from "./directorysitesettings";
export declare enum DirectorySiteInpageTagFormatsEnum {
    Standard = "STANDARD",
    IframeJavascriptInpage = "IFRAME_JAVASCRIPT_INPAGE",
    InternalRedirectInpage = "INTERNAL_REDIRECT_INPAGE",
    JavascriptInpage = "JAVASCRIPT_INPAGE"
}
export declare enum DirectorySiteInterstitialTagFormatsEnum {
    IframeJavascriptInterstitial = "IFRAME_JAVASCRIPT_INTERSTITIAL",
    InternalRedirectInterstitial = "INTERNAL_REDIRECT_INTERSTITIAL",
    JavascriptInterstitial = "JAVASCRIPT_INTERSTITIAL"
}
/**
 * DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
 */
export declare class DirectorySite extends SpeakeasyBase {
    /**
     * Whether this directory site is active.
     */
    active?: boolean;
    /**
     * ID of this directory site. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Represents a DimensionValue resource.
     */
    idDimensionValue?: DimensionValue;
    /**
     * Tag types for regular placements. Acceptable values are: - "STANDARD" - "IFRAME_JAVASCRIPT_INPAGE" - "INTERNAL_REDIRECT_INPAGE" - "JAVASCRIPT_INPAGE"
     */
    inpageTagFormats?: DirectorySiteInpageTagFormatsEnum[];
    /**
     * Tag types for interstitial placements. Acceptable values are: - "IFRAME_JAVASCRIPT_INTERSTITIAL" - "INTERNAL_REDIRECT_INTERSTITIAL" - "JAVASCRIPT_INTERSTITIAL"
     */
    interstitialTagFormats?: DirectorySiteInterstitialTagFormatsEnum[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite".
     */
    kind?: string;
    /**
     * Name of this directory site.
     */
    name?: string;
    /**
     * Directory Site Settings
     */
    settings?: DirectorySiteSettings;
    /**
     * URL of this directory site.
     */
    url?: string;
}
