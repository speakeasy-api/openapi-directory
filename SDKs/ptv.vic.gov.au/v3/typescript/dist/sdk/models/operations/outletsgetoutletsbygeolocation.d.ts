import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OutletsGetOutletsByGeolocationRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Geographic coordinate of latitude
     */
    latitude: number;
    /**
     * Geographic coordinate of longitude
     */
    longitude: number;
    /**
     * Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)
     */
    maxDistance?: number;
    /**
     * Maximum number of results returned (default = 30)
     */
    maxResults?: number;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class OutletsGetOutletsByGeolocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * Ticket outlets near the specified location.
     */
    v3OutletGeolocationResponse?: shared.V3OutletGeolocationResponse;
}
