import { SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";
import { Ownership } from "./ownership";
import { Restrictions } from "./restrictions";
import { Status } from "./status";
/**
 * An app
 */
export declare class App extends SpeakeasyBase {
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
    attributes: Record<string, any>;
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
    ownership?: Ownership;
    /**
     * A random number that changes hourly and is used for achieving a random sort order when displaying apps
     */
    randomize: number;
    /**
     * The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)
     */
    rating: number;
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
     * A field containing summary stats about the app and is specially designed to allow apps to be sorted by popularity
     */
    statistics?: Record<string, any>;
    /**
     * The current status of this review
     */
    status: Status;
    /**
     * The date (in millis) that this app was submitted for approval
     */
    submittedDate?: number;
    /**
     * The type for this app
     */
    type?: string;
    /**
     * The version number for this app
     */
    version: number;
}
