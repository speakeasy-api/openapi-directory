import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSupportingDocumentTypeServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchSupportingDocumentTypePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchSupportingDocumentTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSupportingDocumentTypeRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: FetchSupportingDocumentTypePathParams;
    security: FetchSupportingDocumentTypeSecurity;
}
export declare class FetchSupportingDocumentTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1SupportingDocumentType?: shared.TrusthubV1SupportingDocumentType;
}
