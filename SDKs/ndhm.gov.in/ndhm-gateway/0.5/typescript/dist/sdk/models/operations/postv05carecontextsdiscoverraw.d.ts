import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV05CareContextsDiscoverRawRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server.
     */
    authorization: string;
    requestBody: Uint8Array;
    /**
     * Identifier of the health information provider to which the request was intended.
     */
    xHipId: string;
}
export declare class PostV05CareContextsDiscoverRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **Causes:**
     *
     * @remarks
     *   * Empty verified identifiers.
     *   * Format mismatch of any of attributes.
     *     | type   | Format/Allowed Values|
     *     | ------- | ----------------    |
     *     | gender  | M/F/O/U |
     *     | MOBILE  | valid mobile number with proper country code |
     *
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
