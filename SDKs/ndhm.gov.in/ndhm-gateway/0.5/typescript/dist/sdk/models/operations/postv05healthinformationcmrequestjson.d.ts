import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV05HealthInformationCmRequestJsonRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server.
     */
    authorization: string;
    hiRequest: shared.HIRequest;
    /**
     * Suffix of the consent manager to which the request was intended.
     */
    xCmId: string;
}
export declare class PostV05HealthInformationCmRequestJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **Causes:**
     *
     * @remarks
     *   * Bad request
     *
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
