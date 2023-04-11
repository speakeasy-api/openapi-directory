import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitTerminationsListRequest extends SpeakeasyBase {
    circuitId?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    portSpeed?: number;
    q?: string;
    site?: string;
    siteId?: string;
    termSide?: string;
    upstreamSpeed?: number;
    xconnectId?: string;
}
export declare class CircuitsCircuitTerminationsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.CircuitTermination[];
}
export declare class CircuitsCircuitTerminationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    circuitsCircuitTerminationsList200ApplicationJSONObject?: CircuitsCircuitTerminationsList200ApplicationJSON;
}
