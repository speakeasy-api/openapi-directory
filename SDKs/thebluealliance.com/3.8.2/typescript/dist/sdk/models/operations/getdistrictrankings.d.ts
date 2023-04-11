import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistrictRankingsSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetDistrictRankingsRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA District Key, eg `2016fim`
     */
    districtKey: string;
}
export declare class GetDistrictRankingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    districtRankings?: shared.DistrictRanking[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
