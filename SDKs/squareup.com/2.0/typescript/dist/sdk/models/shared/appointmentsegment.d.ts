import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines an appointment segment of a booking.
 */
export declare class AppointmentSegment extends SpeakeasyBase {
    /**
     * The time span in minutes of an appointment segment.
     */
    durationMinutes: number;
    /**
     * The ID of the [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) object representing the service booked in this segment.
     */
    serviceVariationId: string;
    /**
     * The current version of the item variation representing the service booked in this segment.
     */
    serviceVariationVersion: number;
    /**
     * The ID of the [TeamMember](https://developer.squareup.com/reference/square_2021-08-18/objects/TeamMember) object representing the team member booked in this segment.
     */
    teamMemberId: string;
}
