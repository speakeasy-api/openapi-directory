import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisruptionsGetAllDisruptionsDisruptionModesEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fourteen = "14",
    OneHundred = "100"
}
/**
 * Filter by status of disruption
 */
export declare enum DisruptionsGetAllDisruptionsDisruptionStatusEnum {
    Current = "current",
    Planned = "planned"
}
export declare enum DisruptionsGetAllDisruptionsRouteTypesEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class DisruptionsGetAllDisruptionsRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Filter by disruption_mode; values returned via v3/disruptions/modes API
     */
    disruptionModes?: DisruptionsGetAllDisruptionsDisruptionModesEnum[];
    /**
     * Filter by status of disruption
     */
    disruptionStatus?: DisruptionsGetAllDisruptionsDisruptionStatusEnum;
    /**
     * Filter by route_type; values returned via RouteTypes API
     */
    routeTypes?: DisruptionsGetAllDisruptionsRouteTypesEnum[];
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class DisruptionsGetAllDisruptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * All disruption information for all route types.
     */
    v3DisruptionsResponse?: shared.V3DisruptionsResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
}
