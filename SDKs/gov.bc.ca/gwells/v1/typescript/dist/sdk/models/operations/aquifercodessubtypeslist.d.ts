import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AquiferCodesSubtypesListRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
}
export declare class AquiferCodesSubtypesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.AquiferSubtype[];
}
export declare class AquiferCodesSubtypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    aquiferCodesSubtypesList200ApplicationJSONObject?: AquiferCodesSubtypesList200ApplicationJSON;
}
