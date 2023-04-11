import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPaymentsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListPaymentsRequest extends SpeakeasyBase {
    /**
     * A pagination cursor to retrieve the next set of results for your
     *
     * @remarks
     * original query to the endpoint.
     */
    batchToken?: string;
    /**
     * The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
     */
    beginTime?: string;
    /**
     * The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
     */
    endTime?: string;
    /**
     * Indicates whether or not to include partial payments in the response. Partial payments will have the tenders collected so far, but the itemizations will be empty until the payment is completed.
     */
    includePartial?: boolean;
    /**
     * The maximum number of payments to return in a single response. This value cannot exceed 200.
     */
    limit?: number;
    /**
     * The ID of the location to list payments for. If you specify me, this endpoint returns payments aggregated from all of the business's locations.
     */
    locationId: string;
    /**
     * The order in which payments are listed in the response.
     */
    order?: string;
}
export declare class ListPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Payments?: shared.V1Payment[];
}
