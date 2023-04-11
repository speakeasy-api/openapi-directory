import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSupportingDocumentTypeServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchSupportingDocumentTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSupportingDocumentTypeRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Supporting Document Type resource.
     */
    sid: string;
}
export declare class FetchSupportingDocumentTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1SupportingDocumentType?: shared.TrusthubV1SupportingDocumentType;
}
