import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05PatientsSmsNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xCMID: string;
}
export declare class PostV05PatientsSmsNotifyRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    patientSMSNotifcationRequest?: shared.PatientSmsNotifcationRequest;
}
export declare class PostV05PatientsSmsNotifyRequest extends SpeakeasyBase {
    headers: PostV05PatientsSmsNotifyHeaders;
    request: PostV05PatientsSmsNotifyRequests;
}
export declare class PostV05PatientsSmsNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
