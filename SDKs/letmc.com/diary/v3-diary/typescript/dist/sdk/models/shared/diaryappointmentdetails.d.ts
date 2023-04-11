import { SpeakeasyBase } from "../../../internal/utils";
import { DiaryBookingModel } from "./diarybookingmodel";
import { DiaryGuestDetails } from "./diaryguestdetails";
/**
 * Submission Model - Structure to submit the appointment details
 */
export declare class DiaryAppointmentDetails extends SpeakeasyBase {
    /**
     * Represents a viewing booking slot
     */
    allocationDetails?: DiaryBookingModel;
    /**
     * The Appointment Type ID
     */
    appointmentType?: string;
    /**
     * Additional appointment comments
     */
    extraComments?: string;
    /**
     * A collection of guests linked to the appointment. If none leave empty
     */
    guests?: DiaryGuestDetails[];
    /**
     * The subject of the appointment
     */
    subject?: string;
}
