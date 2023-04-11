import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRefundsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListRefundsRequest extends SpeakeasyBase {
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
     * The approximate number of refunds to return in a single response. Default: 100. Max: 200. Response may contain more results than the prescribed limit when refunds are made simultaneously to multiple tenders in a payment or when refunds are generated in an exchange to account for the value of returned goods.
     */
    limit?: number;
    /**
     * The ID of the location to list refunds for.
     */
    locationId: string;
    /**
     * The order in which payments are listed in the response.
     */
    order?: string;
}
export declare class ListRefundsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Refunds?: shared.V1Refund[];
}
