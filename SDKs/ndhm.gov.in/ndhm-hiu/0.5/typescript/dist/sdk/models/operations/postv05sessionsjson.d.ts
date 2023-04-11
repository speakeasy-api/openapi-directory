import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV05SessionsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **Causes:**
     *
     * @remarks
     *   * Invalid client Id or secret.
     *
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    sessionResponse?: shared.SessionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
