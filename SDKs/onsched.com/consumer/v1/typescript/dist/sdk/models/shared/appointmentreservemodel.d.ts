import { SpeakeasyBase } from "../../../internal/utils";
import { BookingFieldItem } from "./bookingfielditem";
import { CustomFieldInputModel } from "./customfieldinputmodel";
export declare class AppointmentReserveModel extends SpeakeasyBase {
    appointmentBookingFields?: BookingFieldItem[];
    customFields?: CustomFieldInputModel;
    customerBookingFields?: BookingFieldItem[];
    customerMessage?: string;
    email?: string;
    name?: string;
    notes?: string;
    phone?: string;
    phoneExt?: string;
    phoneType?: string;
}
