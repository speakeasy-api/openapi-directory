import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV05ConsentsHipNotifyJsonRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server.
     */
    authorization: string;
    hipConsentNotification: shared.HIPConsentNotification;
    /**
     * Identifier of the health information provider to which the request was intended.
     */
    xHipId: string;
}
export declare class PostV05ConsentsHipNotifyJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **Causes:**
     *
     * @remarks
     *   * Invalid/Expired/Empty token.
     *
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
