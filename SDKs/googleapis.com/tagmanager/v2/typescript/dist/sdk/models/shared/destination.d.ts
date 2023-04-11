import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Google Tag Destination.
 */
export declare class Destination extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * Destination ID.
     */
    destinationId?: string;
    /**
     * The Destination link ID uniquely identifies the Destination.
     */
    destinationLinkId?: string;
    /**
     * The fingerprint of the Google Tag Destination as computed at storage time. This value is recomputed whenever the destination is modified.
     */
    fingerprint?: string;
    /**
     * Destination display name.
     */
    name?: string;
    /**
     * Destination's API relative path.
     */
    path?: string;
    /**
     * Auto generated link to the tag manager UI.
     */
    tagManagerUrl?: string;
}
