import { SpeakeasyBase } from "../../../internal/utils";
import { AppointmentViewModel } from "./appointmentviewmodel";
import { CustomerViewModel } from "./customerviewmodel";
/**
 * Success
 */
export declare class CustomerPrivacyViewModel extends SpeakeasyBase {
    appointments?: AppointmentViewModel[];
    customer?: CustomerViewModel;
}
