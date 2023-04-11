import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The health check object.
     */
    healthCheck?: shared.HealthCheck;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
