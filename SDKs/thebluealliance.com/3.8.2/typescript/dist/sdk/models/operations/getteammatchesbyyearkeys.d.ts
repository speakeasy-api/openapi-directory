import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTeamMatchesByYearKeysSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetTeamMatchesByYearKeysRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Team Key, eg `frc254`
     */
    teamKey: string;
    /**
     * Competition Year (or Season). Must be 4 digits.
     */
    year: number;
}
export declare class GetTeamMatchesByYearKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getTeamMatchesByYearKeys200ApplicationJSONStrings?: string[];
}
