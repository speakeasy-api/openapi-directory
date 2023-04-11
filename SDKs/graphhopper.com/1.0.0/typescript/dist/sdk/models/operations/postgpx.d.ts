import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostGPXRequest extends SpeakeasyBase {
    /**
     * Specify the precision of a point, in meter
     */
    gpsAccuracy?: number;
    /**
     * Specify the vehicle profile like car
     */
    vehicle?: string;
}
export declare class PostGPXResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected Error
     */
    ghError?: shared.GHError;
    headers?: Record<string, string[]>;
    /**
     * Routing Result
     */
    routeResponse?: shared.RouteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
