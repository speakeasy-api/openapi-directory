import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV05HealthInformationNotifyRawRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server.
     */
    authorization: string;
    requestBody: Uint8Array;
}
export declare class PostV05HealthInformationNotifyRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **Causes:**
     *
     * @remarks
     *   * Invalid Request
     *
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
