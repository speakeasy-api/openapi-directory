import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05UsersAuthOnFetchModesHeaders extends SpeakeasyBase {
    authorization: string;
    xHIPID: string;
    xHIUID: string;
}
export declare class PostV05UsersAuthOnFetchModesRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    patientAuthModeQueryResponse?: shared.PatientAuthModeQueryResponse;
}
export declare class PostV05UsersAuthOnFetchModesRequest extends SpeakeasyBase {
    headers: PostV05UsersAuthOnFetchModesHeaders;
    request: PostV05UsersAuthOnFetchModesRequests;
}
export declare class PostV05UsersAuthOnFetchModesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
