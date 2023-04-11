import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KeyDetailsRequest extends SpeakeasyBase {
    key: string;
    userToken?: string;
}
export declare class KeyDetailsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    apiKeyDetailsResponse?: shared.ApiKeyDetailsResponse;
    contentType: string;
    /**
     * Unauthorised
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
