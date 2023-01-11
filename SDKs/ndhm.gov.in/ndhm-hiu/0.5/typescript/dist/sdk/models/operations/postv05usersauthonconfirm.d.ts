import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05UsersAuthOnConfirmHeaders extends SpeakeasyBase {
    authorization: string;
    xHIPID: string;
    xHIUID: string;
}
export declare class PostV05UsersAuthOnConfirmRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    patientAuthConfirmResponse?: shared.PatientAuthConfirmResponse;
}
export declare class PostV05UsersAuthOnConfirmRequest extends SpeakeasyBase {
    headers: PostV05UsersAuthOnConfirmHeaders;
    request: PostV05UsersAuthOnConfirmRequests;
}
export declare class PostV05UsersAuthOnConfirmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
