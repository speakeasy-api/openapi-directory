import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The network settings for the campaign.
 */
export declare class GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings extends SpeakeasyBase {
    /**
     * Whether ads will be served on specified placements in the Google Display Network. Placements are specified using the Placement criterion.
     */
    targetContentNetwork?: boolean;
    /**
     * Whether ads will be served with google.com search results.
     */
    targetGoogleSearch?: boolean;
    /**
     * Whether ads will be served on the Google Partner Network. This is available only to some select Google partner accounts.
     */
    targetPartnerSearchNetwork?: boolean;
    /**
     * Whether ads will be served on partner sites in the Google Search Network (requires `target_google_search` to also be `true`).
     */
    targetSearchNetwork?: boolean;
}
