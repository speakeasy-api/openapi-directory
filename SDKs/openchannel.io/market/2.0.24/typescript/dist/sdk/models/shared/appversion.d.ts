import { SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";
import { Parent } from "./parent";
import { Restrictions } from "./restrictions";
import { Status } from "./status";
/**
 * An AppVersion
 */
export declare class AppVersion extends SpeakeasyBase {
    /**
     * A custom defined list of access requirements
     */
    access?: string[];
    /**
     * Resticts users from accessing this app
     */
    allow: Restrictions;
    /**
     * The id of this app
     */
    appId: string;
    /**
     * A custom defined list of app attributes
     */
    attributes?: Record<string, any>;
    /**
     * The date (in millis) that this app was created
     */
    created: number;
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData: Record<string, any>;
    /**
     * The id of the developer that owns this app
     */
    developerId: string;
    /**
     * True if this is the latest version of this app
     */
    isLatestVersion: boolean;
    /**
     * True if this is the live version of the app
     */
    isLive: boolean;
    /**
     * The date (in millis) that this app was last modified
     */
    lastUpdated: number;
    /**
     * The models that describes the cost and pricing for this app
     */
    model: Model[];
    /**
     * The name of this app
     */
    name: string;
    /**
     * Details of the live version of this app
     */
    parent: Parent;
    /**
     * The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)
     */
    rating?: number;
    /**
     * Resticts users from accessing this app
     */
    restrict: Restrictions;
    /**
     * The number of approved reviews for this app.
     */
    reviewCount?: number;
    /**
     * URL safe aliases that can be used to identify this app even after name changes. The current alias is always at position 0.
     */
    safeName: string[];
    /**
     * The current status of this review
     */
    status: Status;
    /**
     * The type for this app
     */
    type?: string;
    /**
     * The version number for this app
     */
    version: number;
}
