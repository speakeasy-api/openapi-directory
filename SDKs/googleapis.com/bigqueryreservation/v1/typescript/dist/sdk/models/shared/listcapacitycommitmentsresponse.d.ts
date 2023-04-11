import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityCommitment } from "./capacitycommitment";
/**
 * The response for ReservationService.ListCapacityCommitments.
 */
export declare class ListCapacityCommitmentsResponse extends SpeakeasyBase {
    /**
     * List of capacity commitments visible to the user.
     */
    capacityCommitments?: CapacityCommitment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
