import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTeamsByYearKeysSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetTeamsByYearKeysRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * Page number of results to return, zero-indexed
     */
    pageNum: number;
    /**
     * Competition Year (or Season). Must be 4 digits.
     */
    year: number;
}
export declare class GetTeamsByYearKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getTeamsByYearKeys200ApplicationJSONStrings?: string[];
}
