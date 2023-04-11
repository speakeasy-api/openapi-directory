import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDistrictTeamsKeysSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetDistrictTeamsKeysRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA District Key, eg `2016fim`
     */
    districtKey: string;
}
export declare class GetDistrictTeamsKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getDistrictTeamsKeys200ApplicationJSONStrings?: string[];
}
