import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const PostV05CareContextsDiscoverJsonServerList: readonly ["https://your-hrp-server.com"];
export declare class PostV05CareContextsDiscoverJsonRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.
     */
    authorization: string;
    patientDiscoveryRequest: shared.PatientDiscoveryRequest;
    /**
     * Identifier of the health information provider to which the request was intended.
     */
    xHipId: string;
}
export declare class PostV05CareContextsDiscoverJsonResponse extends SpeakeasyBase {
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
