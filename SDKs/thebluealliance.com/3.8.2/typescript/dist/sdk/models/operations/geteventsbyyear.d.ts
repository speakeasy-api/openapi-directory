import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventsByYearSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventsByYearRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * Competition Year (or Season). Must be 4 digits.
     */
    year: number;
}
export declare class GetEventsByYearResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    events?: shared.Event[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
