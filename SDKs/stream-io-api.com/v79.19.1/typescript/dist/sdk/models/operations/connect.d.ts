import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConnectRequest extends SpeakeasyBase {
    json?: shared.ConnectRequest;
}
export declare class ConnectResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
