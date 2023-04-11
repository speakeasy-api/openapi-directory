import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies the network presence of this location.
 */
export declare enum InterconnectLocationRegionInfoLocationPresenceEnum {
    Global = "GLOBAL",
    LocalRegion = "LOCAL_REGION",
    LpGlobal = "LP_GLOBAL",
    LpLocalRegion = "LP_LOCAL_REGION"
}
/**
 * Information about any potential InterconnectAttachments between an Interconnect at a specific InterconnectLocation, and a specific Cloud Region.
 */
export declare class InterconnectLocationRegionInfo extends SpeakeasyBase {
    /**
     * Expected round-trip time in milliseconds, from this InterconnectLocation to a VM in this region.
     */
    expectedRttMs?: string;
    /**
     * Identifies the network presence of this location.
     */
    locationPresence?: InterconnectLocationRegionInfoLocationPresenceEnum;
    /**
     * URL for the region of this location.
     */
    region?: string;
}
