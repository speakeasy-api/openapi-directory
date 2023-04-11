import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter by status of disruption
 */
export declare enum DisruptionsGetDisruptionsByRouteDisruptionStatusEnum {
    Current = "current",
    Planned = "planned"
}
export declare class DisruptionsGetDisruptionsByRouteRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Filter by status of disruption
     */
    disruptionStatus?: DisruptionsGetDisruptionsByRouteDisruptionStatusEnum;
    /**
     * Identifier of route; values returned by Routes API - v3/routes
     */
    routeId: number;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class DisruptionsGetDisruptionsByRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * All disruption information (if any exists) for the specified route.
     */
    v3DisruptionsResponse?: shared.V3DisruptionsResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
}
