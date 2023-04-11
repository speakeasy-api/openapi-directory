import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AquifersListRequest extends SpeakeasyBase {
    aquiferId?: number;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    /**
     * A search term.
     */
    search?: string;
}
export declare class AquifersList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Aquifer[];
}
export declare class AquifersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    aquifersList200ApplicationJSONObject?: AquifersList200ApplicationJSON;
}
