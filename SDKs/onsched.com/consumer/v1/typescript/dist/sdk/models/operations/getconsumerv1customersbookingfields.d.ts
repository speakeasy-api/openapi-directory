import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1CustomersBookingfieldsRequest extends SpeakeasyBase {
    /**
     * id of business location, defaults to primary business location
     */
    locationId?: string;
}
export declare class GetConsumerV1CustomersBookingfieldsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bookingFieldListViewModel?: shared.BookingFieldListViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
