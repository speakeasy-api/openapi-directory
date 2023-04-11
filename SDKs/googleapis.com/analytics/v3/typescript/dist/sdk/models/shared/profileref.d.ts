import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for a linked view (profile).
 */
export declare class ProfileRef extends SpeakeasyBase {
    /**
     * Account ID to which this view (profile) belongs.
     */
    accountId?: string;
    /**
     * Link for this view (profile).
     */
    href?: string;
    /**
     * View (Profile) ID.
     */
    id?: string;
    /**
     * Internal ID for the web property to which this view (profile) belongs.
     */
    internalWebPropertyId?: string;
    /**
     * Analytics view (profile) reference.
     */
    kind?: string;
    /**
     * Name of this view (profile).
     */
    name?: string;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
     */
    webPropertyId?: string;
}
