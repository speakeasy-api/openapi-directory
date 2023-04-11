import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSettlementsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListSettlementsRequest extends SpeakeasyBase {
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
     * The maximum number of settlements to return in a single response. This value cannot exceed 200.
     */
    limit?: number;
    /**
     * The ID of the location to list settlements for. If you specify me, this endpoint returns settlements aggregated from all of the business's locations.
     */
    locationId: string;
    /**
     * The order in which settlements are listed in the response.
     */
    order?: string;
    /**
     * Provide this parameter to retrieve only settlements with a particular status (SENT or FAILED).
     */
    status?: string;
}
export declare class ListSettlementsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Settlements?: shared.V1Settlement[];
}
