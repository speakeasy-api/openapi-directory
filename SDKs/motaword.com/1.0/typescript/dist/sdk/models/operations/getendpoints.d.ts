import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authentication error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * YAML representation of our OpenAPI definition.
     */
    getEndpoints200ApplicationJSONObject?: Record<string, any>;
}
