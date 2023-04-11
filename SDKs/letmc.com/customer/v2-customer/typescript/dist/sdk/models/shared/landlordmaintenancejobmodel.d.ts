import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordMaintenanceJobNoteModel } from "./landlordmaintenancejobnotemodel";
/**
 * Maintenance Job
 */
export declare class LandlordMaintenanceJobModel extends SpeakeasyBase {
    /**
     * AssignedTo
     */
    assignedTo?: string;
    /**
     * Job Closed Date:-
     */
    closedDate?: Date;
    /**
     * Description
     */
    description?: string;
    maintenanceNotes?: LandlordMaintenanceJobNoteModel[];
    /**
     * Property
     */
    property?: string;
    /**
     * Reported
     */
    reported?: Date;
    /**
     * Status
     */
    status?: string;
}
