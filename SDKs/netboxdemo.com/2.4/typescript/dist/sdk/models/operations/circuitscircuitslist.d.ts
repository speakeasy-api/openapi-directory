import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitsListRequest extends SpeakeasyBase {
    cid?: string;
    commitRate?: number;
    /**
     * Multiple values may be separated by commas.
     */
    idIn?: string;
    installDate?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    provider?: string;
    providerId?: string;
    q?: string;
    site?: string;
    siteId?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
    type?: string;
    typeId?: string;
}
export declare class CircuitsCircuitsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Circuit[];
}
export declare class CircuitsCircuitsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    circuitsCircuitsList200ApplicationJSONObject?: CircuitsCircuitsList200ApplicationJSON;
}
