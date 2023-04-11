import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Campaign ad blocking settings.
 */
export declare class AdBlockingConfiguration extends SpeakeasyBase {
    /**
     * Click-through URL used by brand-neutral ads. This is a required field when overrideClickThroughUrl is set to true.
     */
    clickThroughUrl?: string;
    /**
     * ID of a creative bundle to use for this campaign. If set, brand-neutral ads will select creatives from this bundle. Otherwise, a default transparent pixel will be used.
     */
    creativeBundleId?: string;
    /**
     * Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings.
     */
    enabled?: boolean;
    /**
     * Whether the brand-neutral ad's click-through URL comes from the campaign's creative bundle or the override URL. Must be set to true if ad blocking is enabled and no creative bundle is configured.
     */
    overrideClickThroughUrl?: boolean;
}
