import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KeyAvailabilityRequest extends SpeakeasyBase {
    key: string;
}
export declare class KeyAvailabilityResponse extends SpeakeasyBase {
    /**
     * Success
     */
    apiKeyResponse?: shared.ApiKeyResponse;
    contentType: string;
    /**
     * Invalid Key
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
