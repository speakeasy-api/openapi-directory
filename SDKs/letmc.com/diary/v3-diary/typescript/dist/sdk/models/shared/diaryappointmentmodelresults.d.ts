import { SpeakeasyBase } from "../../../internal/utils";
import { DiaryAppointmentModel } from "./diaryappointmentmodel";
/**
 * Holds results from a paged query returning DiaryAppointmentModel values
 */
export declare class DiaryAppointmentModelResults extends SpeakeasyBase {
    /**
     * The total number of results available for all pages
     */
    count?: number;
    /**
     * The resulting data returned from the paged query range
     */
    data?: DiaryAppointmentModel[];
}
