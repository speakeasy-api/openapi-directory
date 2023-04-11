import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter by status of disruption
 */
export declare enum DisruptionsGetDisruptionsByStopDisruptionStatusEnum {
    Current = "current",
    Planned = "planned"
}
export declare class DisruptionsGetDisruptionsByStopRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Filter by status of disruption
     */
    disruptionStatus?: DisruptionsGetDisruptionsByStopDisruptionStatusEnum;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Identifier of stop; values returned by Stops API - v3/stops
     */
    stopId: number;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class DisruptionsGetDisruptionsByStopResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * All disruption information (if any exists) for the specified stop.
     */
    v3DisruptionsResponse?: shared.V3DisruptionsResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
}
