import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDevicesRequest extends SpeakeasyBase {
    userId?: string;
}
export declare class ListDevicesResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    listDevicesResponse?: shared.ListDevicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
