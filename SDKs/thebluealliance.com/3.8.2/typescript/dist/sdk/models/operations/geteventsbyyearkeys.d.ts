import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEventsByYearKeysSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventsByYearKeysRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * Competition Year (or Season). Must be 4 digits.
     */
    year: number;
}
export declare class GetEventsByYearKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getEventsByYearKeys200ApplicationJSONStrings?: string[];
}
