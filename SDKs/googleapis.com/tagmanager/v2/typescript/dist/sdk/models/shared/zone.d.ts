import { SpeakeasyBase } from "../../../internal/utils";
import { ZoneBoundary } from "./zoneboundary";
import { ZoneChildContainer } from "./zonechildcontainer";
import { ZoneTypeRestriction } from "./zonetyperestriction";
/**
 * Represents a Google Tag Manager Zone's contents.
 */
export declare class Zone extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * Represents a Zone's boundaries.
     */
    boundary?: ZoneBoundary;
    /**
     * Containers that are children of this Zone.
     */
    childContainer?: ZoneChildContainer[];
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.
     */
    fingerprint?: string;
    /**
     * Zone display name.
     */
    name?: string;
    /**
     * User notes on how to apply this zone in the container.
     */
    notes?: string;
    /**
     * GTM Zone's API relative path.
     */
    path?: string;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * Represents a Zone's type restrictions.
     */
    typeRestriction?: ZoneTypeRestriction;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
    /**
     * The Zone ID uniquely identifies the GTM Zone.
     */
    zoneId?: string;
}
