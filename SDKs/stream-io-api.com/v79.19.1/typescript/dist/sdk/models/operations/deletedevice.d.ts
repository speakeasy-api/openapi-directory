import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDeviceRequest extends SpeakeasyBase {
    id?: string;
    userId?: string;
}
export declare class DeleteDeviceResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    response?: shared.Response;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
