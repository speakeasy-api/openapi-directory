import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedLocation } from "./assignedlocation";
/**
 * Response message for AssignedLocationService.BulkEditAssignedLocations.
 */
export declare class BulkEditAssignedLocationsResponse extends SpeakeasyBase {
    /**
     * The list of assigned locations that have been successfully created. This list will be absent if empty.
     */
    assignedLocations?: AssignedLocation[];
}
