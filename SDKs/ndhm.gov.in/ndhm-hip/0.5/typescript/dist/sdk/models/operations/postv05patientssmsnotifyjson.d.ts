import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV05PatientsSmsNotifyJsonRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.
     */
    authorization: string;
    patientSMSNotifcationRequest: shared.PatientSMSNotifcationRequest;
    /**
     * Suffix of the consent manager to which the request was intended.
     */
    xCmId: string;
}
export declare class PostV05PatientsSmsNotifyJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **Causes:**
     *
     * @remarks
     *   * required information not provided
     *
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
