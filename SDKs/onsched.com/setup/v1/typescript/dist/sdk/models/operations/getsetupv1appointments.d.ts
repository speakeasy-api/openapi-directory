import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1AppointmentsRequest extends SpeakeasyBase {
    /**
     * Filter appointments by user email who booked
     */
    bookedBy?: string;
    /**
     * Filter appointments by calendar
     */
    calendarId?: string;
    /**
     * Filter appointments by customer
     */
    customerId?: string;
    /**
     * Filter appointments by email address
     */
    email?: string;
    /**
     * Format YYYY-MM-DD: Filter appointments on/before endDate
     */
    endDate?: Date;
    /**
     * Filter appointments by lastname or part of
     */
    lastname?: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * id of business location, defaults to primary business location
     */
    locationId?: string;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * Filter appointments by resource
     */
    resourceId?: string;
    /**
     * Filter appointments by service allocation
     */
    serviceAllocationId?: string;
    /**
     * Filter appointments by service
     */
    serviceId?: string;
    /**
     * Format YYYY-MM-DD: Filter appointments by on/after startDate
     */
    startDate?: Date;
    /**
     * Filter appointments by status: IN, BK, CN, RE, RS
     */
    status?: string;
}
export declare class GetSetupV1AppointmentsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentListViewModel?: shared.AppointmentListViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
