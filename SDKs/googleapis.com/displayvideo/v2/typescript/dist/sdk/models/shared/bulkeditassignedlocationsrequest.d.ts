import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedLocationInput } from "./assignedlocation";
/**
 * Request message for AssignedLocationService.BulkEditAssignedLocations.
 */
export declare class BulkEditAssignedLocationsRequestInput extends SpeakeasyBase {
    /**
     * The assigned locations to create in bulk, specified as a list of AssignedLocations.
     */
    createdAssignedLocations?: AssignedLocationInput[];
    /**
     * The IDs of the assigned locations to delete in bulk, specified as a list of assigned_location_ids.
     */
    deletedAssignedLocations?: string[];
}
