import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV05UsersAuthOnFetchModesRawRequest extends SpeakeasyBase {
    /**
     * Access token which was issued after successful login with gateway auth server.
     */
    authorization: string;
    requestBody: Uint8Array;
    /**
     * Identifier of the health information provider to which the request was intended.
     */
    xHipId: string;
    /**
     * Identifier of the health information user to which the request was intended.
     */
    xHiuId: string;
}
export declare class PostV05UsersAuthOnFetchModesRawResponse extends SpeakeasyBase {
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
