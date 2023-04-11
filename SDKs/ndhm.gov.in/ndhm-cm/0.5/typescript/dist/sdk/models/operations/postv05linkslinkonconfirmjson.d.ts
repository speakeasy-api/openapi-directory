import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV05LinksLinkOnConfirmJsonRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server.
     */
    authorization: string;
    patientLinkResult: shared.PatientLinkResult;
}
export declare class PostV05LinksLinkOnConfirmJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **Causes:**
     *
     * @remarks
     *   * resp not specified
     *   * atleast patient or error should be specified
     *
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
