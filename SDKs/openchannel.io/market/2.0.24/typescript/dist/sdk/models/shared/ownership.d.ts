import { SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";
/**
 * The current ownership status for this app
 */
export declare enum OwnershipOwnershipStatusEnum {
    Pending = "pending",
    Active = "active",
    Uninstalled = "uninstalled",
    Cancelled = "cancelled"
}
/**
 * The current ownership type for this app
 */
export declare enum OwnershipOwnershipTypeEnum {
    Full = "full",
    Subscription = "subscription",
    Trial = "trial"
}
/**
 * OK
 */
export declare class Ownership extends SpeakeasyBase {
    /**
     * The id of the app that is owned
     */
    appId: string;
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: Record<string, any>;
    /**
     * The date (in millis) of when this app was owned
     */
    date: number;
    /**
     * The id of the developer for this app
     */
    developerId: string;
    /**
     * The date (in millis) of when this app ownership expires
     */
    expires?: number;
    /**
     * The model that describes the cost and pricing for apps
     */
    model: Model;
    /**
     * The id of this ownership
     */
    ownershipId: string;
    /**
     * The current ownership status for this app
     */
    ownershipStatus: OwnershipOwnershipStatusEnum;
    /**
     * The current ownership type for this app
     */
    ownershipType: OwnershipOwnershipTypeEnum;
    /**
     * The date (in millis) of when this app was uninstalled
     */
    uninstallDate?: number;
    /**
     * The id of the user that owns this app
     */
    userId: string;
}
