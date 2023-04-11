import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1AppointmentsRequest extends SpeakeasyBase {
    /**
     * Filter by the email of who booked
     */
    bookedBy?: string;
    /**
     * Filter by calendar
     */
    calendarId?: string;
    /**
     * Filter by customer
     */
    customerId?: string;
    /**
     * Filter by email address
     */
    email?: string;
    /**
     * Format YYYY-MM-DD. Filter on/before endDate
     */
    endDate?: Date;
    /**
     * Filter by lastname or part of it
     */
    lastname?: string;
    /**
     * Page limit, default 20, max 100
     */
    limit?: number;
    /**
     * id of business location
     */
    locationId?: string;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * Filter by phone number or part of it
     */
    phone?: string;
    /**
     * Filter by resource
     */
    resourceId?: string;
    /**
     * Filter by service allocation
     */
    serviceAllocationId?: string;
    /**
     * Filter by service
     */
    serviceId?: string;
    /**
     * Format YYYY-MM-DD. Filter by on/after startDate
     */
    startDate?: Date;
    /**
     * Filter by status: IN, BK, CN, RE, RS
     */
    status?: string;
}
export declare class GetConsumerV1AppointmentsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentListViewModel?: shared.AppointmentListViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
