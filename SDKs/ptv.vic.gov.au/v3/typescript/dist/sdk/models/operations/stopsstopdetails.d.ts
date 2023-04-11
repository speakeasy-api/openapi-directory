import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Number identifying transport mode; values returned via RouteTypes API
 */
export declare enum StopsStopDetailsRouteTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class StopsStopDetailsRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Incdicates whether the stop_id is a GTFS ID or not
     */
    gtfs?: boolean;
    /**
     * Number identifying transport mode; values returned via RouteTypes API
     */
    routeType: StopsStopDetailsRouteTypeEnum;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Indicates if stop accessibility information will be returned (default = false)
     */
    stopAccessibility?: boolean;
    /**
     * Indicates if stop amenity information will be returned (default = false)
     */
    stopAmenities?: boolean;
    /**
     * Indicates if stop contact information will be returned (default = false)
     */
    stopContact?: boolean;
    /**
     * Indicates if stop disruption information will be returned (default = false)
     */
    stopDisruptions?: boolean;
    /**
     * Identifier of stop; values returned by Stops API
     */
    stopId: number;
    /**
     * Indicates if stop location information will be returned (default = false)
     */
    stopLocation?: boolean;
    /**
     * Indicates if stop staffing information will be returned (default = false)
     */
    stopStaffing?: boolean;
    /**
     * Indicates if stop ticket information will be returned (default = false)
     */
    stopTicket?: boolean;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class StopsStopDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * Stop location, amenity and accessibility facility information for the specified stop (metropolitan and V/Line stations only).
     */
    v3StopResponse?: shared.V3StopResponse;
}
