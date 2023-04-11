import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether the user has access to the location it duplicates.
 */
export declare enum DuplicateAccessEnum {
    AccessUnspecified = "ACCESS_UNSPECIFIED",
    AccessUnknown = "ACCESS_UNKNOWN",
    Allowed = "ALLOWED",
    Insufficient = "INSUFFICIENT"
}
/**
 * Information about the location that this location duplicates.
 */
export declare class Duplicate extends SpeakeasyBase {
    /**
     * Indicates whether the user has access to the location it duplicates.
     */
    access?: DuplicateAccessEnum;
    /**
     * The resource name of the location that this duplicates. Only populated if the authenticated user has access rights to that location and that location is not deleted.
     */
    locationName?: string;
    /**
     * The place ID of the location that this duplicates.
     */
    placeId?: string;
}
