import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for iTunes Connect App Analytics.
 */
export declare class ITunesConnectAnalytics extends SpeakeasyBase {
    /**
     * Affiliate token used to create affiliate-coded links.
     */
    at?: string;
    /**
     * Campaign text that developers can optionally add to any link in order to track sales from a specific marketing campaign.
     */
    ct?: string;
    /**
     * iTune media types, including music, podcasts, audiobooks and so on.
     */
    mt?: string;
    /**
     * Provider token that enables analytics for Dynamic Links from within iTunes Connect.
     */
    pt?: string;
}
