import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05HealthInformationHipOnRequestHeaders extends SpeakeasyBase {
    authorization: string;
    xCMID: string;
}
export declare class PostV05HealthInformationHipOnRequestRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    hipHealthInformationRequestAcknowledgement?: shared.HipHealthInformationRequestAcknowledgement;
}
export declare class PostV05HealthInformationHipOnRequestRequest extends SpeakeasyBase {
    headers: PostV05HealthInformationHipOnRequestHeaders;
    request: PostV05HealthInformationHipOnRequestRequests;
}
export declare class PostV05HealthInformationHipOnRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
