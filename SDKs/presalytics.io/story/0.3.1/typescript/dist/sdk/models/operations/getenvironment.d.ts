import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getEnvironment200ApplicationJSONObject?: Record<string, any>;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
}
