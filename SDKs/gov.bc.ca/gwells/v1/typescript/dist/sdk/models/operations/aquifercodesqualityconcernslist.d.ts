import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AquiferCodesQualityConcernsListRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
}
export declare class AquiferCodesQualityConcernsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.QualityConcern[];
}
export declare class AquiferCodesQualityConcernsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    aquiferCodesQualityConcernsList200ApplicationJSONObject?: AquiferCodesQualityConcernsList200ApplicationJSON;
}
