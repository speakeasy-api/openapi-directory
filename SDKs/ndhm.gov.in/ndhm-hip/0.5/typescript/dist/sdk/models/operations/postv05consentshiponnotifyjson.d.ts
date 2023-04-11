import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV05ConsentsHipOnNotifyJsonRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.
     */
    authorization: string;
    hipConsentNotificationResponse: shared.HIPConsentNotificationResponse;
    /**
     * Suffix of the consent manager to which the request was intended.
     */
    xCmId: string;
}
export declare class PostV05ConsentsHipOnNotifyJsonResponse extends SpeakeasyBase {
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
