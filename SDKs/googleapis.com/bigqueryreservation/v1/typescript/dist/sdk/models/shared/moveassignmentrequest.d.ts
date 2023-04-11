import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for ReservationService.MoveAssignment. **Note**: "bigquery.reservationAssignments.create" permission is required on the destination_id. **Note**: "bigquery.reservationAssignments.create" and "bigquery.reservationAssignments.delete" permission are required on the related assignee.
 */
export declare class MoveAssignmentRequest extends SpeakeasyBase {
    /**
     * The optional assignment ID. A new assignment name is generated if this field is empty. This field can contain only lowercase alphanumeric characters or dashes. Max length is 64 characters.
     */
    assignmentId?: string;
    /**
     * The new reservation ID, e.g.: `projects/myotherproject/locations/US/reservations/team2-prod`
     */
    destinationId?: string;
}
