import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStatusSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetStatusRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
}
export declare class GetStatusResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    apiStatus?: shared.APIStatus;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
