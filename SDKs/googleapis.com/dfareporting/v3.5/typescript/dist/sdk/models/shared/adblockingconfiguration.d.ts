import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Campaign ad blocking settings.
 */
export declare class AdBlockingConfiguration extends SpeakeasyBase {
    /**
     * Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings.
     */
    enabled?: boolean;
}
