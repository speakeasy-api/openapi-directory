import { SpeakeasyBase } from "../../../internal/utils";
import { Reservation } from "./reservation";
/**
 * The response for ReservationService.ListReservations.
 */
export declare class ListReservationsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * List of reservations visible to the user.
     */
    reservations?: Reservation[];
}
