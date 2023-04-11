import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV05HiServicesServiceIdRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server.
     */
    authorization: string;
    serviceId: string;
}
export declare class GetV05HiServicesServiceIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **Causes:**
     *
     * @remarks
     *   * Unauthorized request
     *
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * service details fetched successfully
     */
    serviceProfileResponse?: shared.ServiceProfileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
