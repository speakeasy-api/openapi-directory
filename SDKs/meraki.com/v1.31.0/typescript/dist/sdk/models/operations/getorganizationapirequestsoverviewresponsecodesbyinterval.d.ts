import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter by API version of the endpoint. Allowable values are: [0, 1]
 */
export declare enum GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum {
    Zero = "0",
    One = "1"
}
export declare class GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest extends SpeakeasyBase {
    /**
     * Filter by admin ID of user that made the API request
     */
    adminIds?: string[];
    /**
     * The time interval in seconds for returned data. The valid intervals are: 120, 3600, 14400, 21600. The default is 21600. Interval is calculated if time params are provided.
     */
    interval?: number;
    /**
     * Filter by operation ID of the endpoint
     */
    operationIds?: string[];
    organizationId: string;
    /**
     * Filter by source IP that made the API request
     */
    sourceIps?: string[];
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. If interval is provided, the timespan will be autocalculated.
     */
    timespan?: number;
    /**
     * Filter by user agent string for API request. This will filter by a complete or partial match.
     */
    userAgent?: string;
    /**
     * Filter by API version of the endpoint. Allowable values are: [0, 1]
     */
    version?: GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum;
}
export declare class GetOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONCounts extends SpeakeasyBase {
    /**
     * Response status code of the API response
     */
    code?: number;
    /**
     * Number of records that match the status code
     */
    count?: number;
}
export declare class GetOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSON extends SpeakeasyBase {
    /**
     * list of response codes and a count of how many requests had that code in the given time period
     */
    counts?: GetOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONCounts[];
    /**
     * The end time of the access period
     */
    endTs?: Date;
    /**
     * The start time of the access period
     */
    startTs?: Date;
}
export declare class GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects?: GetOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSON[];
}
