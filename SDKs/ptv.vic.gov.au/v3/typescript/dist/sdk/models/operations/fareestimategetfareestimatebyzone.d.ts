import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class FareEstimateGetFareEstimateByZoneRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    isJourneyInFreeTramZone?: boolean;
    /**
     * JourneyTouchOffUtc in format yyyy-M-d h:m (e.g 2016-5-31 16:53).
     */
    journeyTouchOffUtc?: Date;
    /**
     * JourneyTouchOnUtc in format yyyy-M-d h:m (e.g 2016-5-31 16:53).
     */
    journeyTouchOnUtc?: Date;
    /**
     * Maximum Zone travelled through id. 6
     */
    maxZone: number;
    /**
     * Minimum Zone travelled through ie. 1
     */
    minZone: number;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
    travelledRouteTypes?: FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnum[];
}
export declare class FareEstimateGetFareEstimateByZoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * Resultant set fare estimates
     */
    v3FareEstimateResponse?: any;
}
