import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1AppointmentsBookingfieldsRequest extends SpeakeasyBase {
    /**
     * id of business location
     */
    locationId?: string;
}
export declare class GetConsumerV1AppointmentsBookingfieldsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bookingFieldListViewModel?: shared.BookingFieldListViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
