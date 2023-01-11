import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const PostV05ConsentRequestsOnStatusServerList: readonly ["https://dev.ndhm.gov.in/hiu"];
export declare class PostV05ConsentRequestsOnStatusHeaders extends SpeakeasyBase {
    authorization: string;
    xHIUID: string;
}
export declare class PostV05ConsentRequestsOnStatusRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    hiuConsentRequestStatus?: shared.HiuConsentRequestStatus;
}
export declare class PostV05ConsentRequestsOnStatusRequest extends SpeakeasyBase {
    serverURL?: string;
    headers: PostV05ConsentRequestsOnStatusHeaders;
    request: PostV05ConsentRequestsOnStatusRequests;
}
export declare class PostV05ConsentRequestsOnStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
