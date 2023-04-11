import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitTerminationsListRequest extends SpeakeasyBase {
    circuitId?: string;
    circuitIdN?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    portSpeed?: string;
    portSpeedGt?: string;
    portSpeedGte?: string;
    portSpeedLt?: string;
    portSpeedLte?: string;
    portSpeedN?: string;
    q?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    termSide?: string;
    termSideN?: string;
    upstreamSpeed?: string;
    upstreamSpeedGt?: string;
    upstreamSpeedGte?: string;
    upstreamSpeedLt?: string;
    upstreamSpeedLte?: string;
    upstreamSpeedN?: string;
    xconnectId?: string;
    xconnectIdIc?: string;
    xconnectIdIe?: string;
    xconnectIdIew?: string;
    xconnectIdIsw?: string;
    xconnectIdN?: string;
    xconnectIdNic?: string;
    xconnectIdNie?: string;
    xconnectIdNiew?: string;
    xconnectIdNisw?: string;
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
