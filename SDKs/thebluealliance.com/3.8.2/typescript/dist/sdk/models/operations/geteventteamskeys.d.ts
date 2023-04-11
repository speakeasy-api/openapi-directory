import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEventTeamsKeysSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventTeamsKeysRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Event Key, eg `2016nytr`
     */
    eventKey: string;
}
export declare class GetEventTeamsKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getEventTeamsKeys200ApplicationJSONStrings?: string[];
}
