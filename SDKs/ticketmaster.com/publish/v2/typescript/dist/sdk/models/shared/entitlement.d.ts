import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * The type of the entity to add this entitlement to
 */
export declare enum EntitlementRelatedEntityTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Source of the extension, where it came from
 */
export declare enum EntitlementSourceEnum {
    Ticketmaster = "ticketmaster"
}
/**
 * This class defines an entitlement data on the Publish API
 */
export declare class Entitlement extends SpeakeasyBase {
    /**
     * The actual entitlements information to add to the entity
     */
    data: Record<string, any>;
    /**
     * Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided
     */
    relatedEntityId?: string;
    /**
     * Source
     */
    relatedEntitySource?: Source;
    /**
     * The type of the entity to add this entitlement to
     */
    relatedEntityType: EntitlementRelatedEntityTypeEnum;
    /**
     * Source of the extension, where it came from
     */
    source: EntitlementSourceEnum;
    /**
     * Version of the entitlements. Version is to prevent to override an entitlements with an older one
     */
    versionNumber?: number;
}
