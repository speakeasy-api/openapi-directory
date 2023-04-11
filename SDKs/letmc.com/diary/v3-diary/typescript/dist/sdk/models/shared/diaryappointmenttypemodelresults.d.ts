import { SpeakeasyBase } from "../../../internal/utils";
import { DiaryAppointmentTypeModel } from "./diaryappointmenttypemodel";
/**
 * Holds results from a paged query returning DiaryAppointmentTypeModel values
 */
export declare class DiaryAppointmentTypeModelResults extends SpeakeasyBase {
    /**
     * The total number of results available for all pages
     */
    count?: number;
    /**
     * The resulting data returned from the paged query range
     */
    data?: DiaryAppointmentTypeModel[];
}
