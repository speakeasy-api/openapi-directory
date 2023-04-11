import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Public API: Resources.calendars
 */
export declare class CalendarResource extends SpeakeasyBase {
    /**
     * Unique ID for the building a resource is located in.
     */
    buildingId?: string;
    /**
     * Capacity of a resource, number of seats in a room.
     */
    capacity?: number;
    /**
     * ETag of the resource.
     */
    etags?: string;
    /**
     * Instances of features for the calendar resource.
     */
    featureInstances?: any;
    /**
     * Name of the floor a resource is located on.
     */
    floorName?: string;
    /**
     * Name of the section within a floor a resource is located in.
     */
    floorSection?: string;
    /**
     * The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".
     */
    generatedResourceName?: string;
    /**
     * The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`.
     */
    kind?: string;
    /**
     * The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.
     */
    resourceCategory?: string;
    /**
     * Description of the resource, visible only to admins.
     */
    resourceDescription?: string;
    /**
     * The read-only email for the calendar resource. Generated as part of creating a new calendar resource.
     */
    resourceEmail?: string;
    /**
     * The unique ID for the calendar resource.
     */
    resourceId?: string;
    /**
     * The name of the calendar resource. For example, "Training Room 1A".
     */
    resourceName?: string;
    /**
     * The type of the calendar resource, intended for non-room resources.
     */
    resourceType?: string;
    /**
     * Description of the resource, visible to users and admins.
     */
    userVisibleDescription?: string;
}
