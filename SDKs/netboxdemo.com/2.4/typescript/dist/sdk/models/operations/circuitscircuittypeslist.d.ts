import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitTypesListRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    slug?: string;
}
export declare class CircuitsCircuitTypesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.CircuitType[];
}
export declare class CircuitsCircuitTypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    circuitsCircuitTypesList200ApplicationJSONObject?: CircuitsCircuitTypesList200ApplicationJSON;
}
