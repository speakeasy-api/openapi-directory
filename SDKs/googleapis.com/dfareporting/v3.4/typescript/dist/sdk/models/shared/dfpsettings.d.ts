import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Google Ad Manager Settings
 */
export declare class DfpSettings extends SpeakeasyBase {
    /**
     * Ad Manager network code for this directory site.
     */
    dfpNetworkCode?: string;
    /**
     * Ad Manager network name for this directory site.
     */
    dfpNetworkName?: string;
    /**
     * Whether this directory site accepts programmatic placements.
     */
    programmaticPlacementAccepted?: boolean;
    /**
     * Whether this directory site accepts publisher-paid tags.
     */
    pubPaidPlacementAccepted?: boolean;
    /**
     * Whether this directory site is available only via Publisher Portal.
     */
    publisherPortalOnly?: boolean;
}
