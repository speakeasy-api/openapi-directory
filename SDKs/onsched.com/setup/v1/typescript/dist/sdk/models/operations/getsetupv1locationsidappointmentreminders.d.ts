import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1LocationsIdAppointmentremindersRequest extends SpeakeasyBase {
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
}
export declare class GetSetupV1LocationsIdAppointmentremindersResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentReminderViewModel?: shared.AppointmentReminderViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
