import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers.
 */
export declare class CmHybridConfig extends SpeakeasyBase {
    /**
     * Required. Immutable. Account ID of the CM360 Floodlight configuration linked with the DV360 advertiser.
     */
    cmAccountId?: string;
    /**
     * Required. Immutable. ID of the CM360 Floodlight configuration linked with the DV360 advertiser.
     */
    cmFloodlightConfigId?: string;
    /**
     * Required. Immutable. By setting this field to `true`, you, on behalf of your company, authorize the sharing of information from the given Floodlight configuration to this Display & Video 360 advertiser.
     */
    cmFloodlightLinkingAuthorized?: boolean;
    /**
     * A list of CM360 sites whose placements will be synced to DV360 as creatives. If absent or empty in CreateAdvertiser method, the system will automatically create a CM360 site. Removing sites from this list may cause DV360 creatives synced from CM360 to be deleted. At least one site must be specified.
     */
    cmSyncableSiteIds?: string[];
    /**
     * Whether or not to report DV360 cost to CM360.
     */
    dv360ToCmCostReportingEnabled?: boolean;
    /**
     * Whether or not to include DV360 data in CM360 data transfer reports.
     */
    dv360ToCmDataSharingEnabled?: boolean;
}
