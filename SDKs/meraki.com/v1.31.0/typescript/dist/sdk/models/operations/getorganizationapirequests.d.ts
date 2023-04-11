import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE')
 */
export declare enum GetOrganizationApiRequestsMethodEnum {
    Delete = "DELETE",
    Get = "GET",
    Post = "POST",
    Put = "PUT"
}
/**
 * Filter the results by the API version of the API request
 */
export declare enum GetOrganizationApiRequestsVersionEnum {
    Zero = "0",
    One = "1"
}
export declare class GetOrganizationApiRequestsRequest extends SpeakeasyBase {
    /**
     * Filter the results by the ID of the admin who made the API requests
     */
    adminId?: string;
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE')
     */
    method?: GetOrganizationApiRequestsMethodEnum;
    /**
     * Filter the results by one or more operation IDs for the API request
     */
    operationIds?: string[];
    organizationId: string;
    /**
     * Filter the results by the path of the API requests
     */
    path?: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.
     */
    perPage?: number;
    /**
     * Filter the results by the response code of the API requests
     */
    responseCode?: number;
    /**
     * Filter the results by the IP address of the originating API request
     */
    sourceIp?: string;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.
     */
    timespan?: number;
    /**
     * Filter the results by the user agent string of the API request
     */
    userAgent?: string;
    /**
     * Filter the results by the API version of the API request
     */
    version?: GetOrganizationApiRequestsVersionEnum;
}
/**
 * API version of the endpoint.
 */
export declare enum GetOrganizationApiRequests200ApplicationJSONVersionEnum {
    Zero = "0",
    One = "1"
}
export declare class GetOrganizationApiRequests200ApplicationJSON extends SpeakeasyBase {
    /**
     * Database ID for the admin user who made the API request.
     */
    adminId?: string;
    /**
     * The host which the API request was directed at.
     */
    host?: string;
    /**
     * HTTP method used in the API request.
     */
    method?: string;
    /**
     * Operation ID for the endpoint.
     */
    operationId?: string;
    /**
     * The API request path.
     */
    path?: string;
    /**
     * The query string sent with the API request.
     */
    queryString?: string;
    /**
     * API request response code.
     */
    responseCode?: number;
    /**
     * Public IP address from which the API request was made.
     */
    sourceIp?: string;
    /**
     * Timestamp, in iso8601 format, indicating when the API request was made.
     */
    ts?: Date;
    /**
     * The API request user agent.
     */
    userAgent?: string;
    /**
     * API version of the endpoint.
     */
    version?: GetOrganizationApiRequests200ApplicationJSONVersionEnum;
}
export declare class GetOrganizationApiRequestsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationApiRequests200ApplicationJSONObjects?: GetOrganizationApiRequests200ApplicationJSON[];
}
