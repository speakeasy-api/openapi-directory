import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV05ConsentRequestsOnStatusJsonRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server.
     */
    authorization: string;
    hiuConsentRequestStatus: shared.HIUConsentRequestStatus;
    /**
     * Identifier of the health information user to which the request was intended.
     */
    xHiuId: string;
}
export declare class PostV05ConsentRequestsOnStatusJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **Causes:**
     *
     * @remarks
     *   * Invalid data sent
     *
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
