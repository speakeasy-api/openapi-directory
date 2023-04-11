import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventMatchesSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventMatchesRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Event Key, eg `2016nytr`
     */
    eventKey: string;
}
export declare class GetEventMatchesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    matches?: shared.Match[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
