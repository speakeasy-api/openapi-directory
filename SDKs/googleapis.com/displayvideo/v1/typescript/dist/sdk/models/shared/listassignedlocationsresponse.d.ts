import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedLocation } from "./assignedlocation";
/**
 * Response message for AssignedLocationService.ListAssignedLocations.
 */
export declare class ListAssignedLocationsResponse extends SpeakeasyBase {
    /**
     * The list of assigned locations. This list will be absent if empty.
     */
    assignedLocations?: AssignedLocation[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAssignedLocations` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
