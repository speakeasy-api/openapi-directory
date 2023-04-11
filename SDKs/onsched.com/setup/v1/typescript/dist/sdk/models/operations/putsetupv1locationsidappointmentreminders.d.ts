import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1LocationsIdAppointmentremindersRequest extends SpeakeasyBase {
    /**
     * input model for reminders
     */
    appointmentRemindersInputModel?: shared.AppointmentRemindersInputModel;
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
}
export declare class PutSetupV1LocationsIdAppointmentremindersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
