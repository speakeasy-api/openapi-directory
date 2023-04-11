import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVeteranStatusSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetVeteranStatusResponse extends SpeakeasyBase {
    /**
     * Bad request - invalid or missing query parameters
     */
    apiError?: shared.APIError;
    /**
     * Missing API token
     */
    authorizationError?: shared.AuthorizationError;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Confirmation status successfully retrieved
     */
    veteranStatusConfirmation?: shared.VeteranStatusConfirmation;
}
