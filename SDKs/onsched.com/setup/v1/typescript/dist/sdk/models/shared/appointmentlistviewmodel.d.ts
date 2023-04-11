import { SpeakeasyBase } from "../../../internal/utils";
import { AppointmentViewModel } from "./appointmentviewmodel";
/**
 * Success
 */
export declare class AppointmentListViewModel extends SpeakeasyBase {
    count?: number;
    data?: AppointmentViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
