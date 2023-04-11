import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnbanRequest extends SpeakeasyBase {
    id?: string;
    targetUserId?: string;
    type?: string;
}
export declare class UnbanResponse extends SpeakeasyBase {
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
