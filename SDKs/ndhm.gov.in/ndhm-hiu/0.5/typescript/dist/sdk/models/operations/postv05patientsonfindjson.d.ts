import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const PostV05PatientsOnFindJsonServerList: readonly ["https://dev.ndhm.gov.in/hiu"];
export declare class PostV05PatientsOnFindJsonRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.
     */
    authorization: string;
    patientIdentificationResponse: shared.PatientIdentificationResponse;
}
export declare class PostV05PatientsOnFindJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Invalid request, required attributes not provided
     *
     * @remarks
     *
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
