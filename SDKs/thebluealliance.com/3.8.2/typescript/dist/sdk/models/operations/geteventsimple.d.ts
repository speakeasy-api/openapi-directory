import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventSimpleSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventSimpleRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Event Key, eg `2016nytr`
     */
    eventKey: string;
}
export declare class GetEventSimpleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    eventSimple?: shared.EventSimple;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
