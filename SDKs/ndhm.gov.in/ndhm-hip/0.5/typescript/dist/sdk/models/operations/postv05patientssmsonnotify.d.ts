import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05PatientsSmsOnNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xHIPID: string;
}
export declare class PostV05PatientsSmsOnNotifyRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    patientSMSNotifcationResponse?: shared.PatientSmsNotifcationResponse;
}
export declare class PostV05PatientsSmsOnNotifyRequest extends SpeakeasyBase {
    headers: PostV05PatientsSmsOnNotifyHeaders;
    request: PostV05PatientsSmsOnNotifyRequests;
}
export declare class PostV05PatientsSmsOnNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
