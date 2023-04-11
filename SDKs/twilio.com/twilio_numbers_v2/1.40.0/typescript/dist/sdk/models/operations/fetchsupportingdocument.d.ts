import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSupportingDocumentServerList: readonly ["https://numbers.twilio.com"];
export declare class FetchSupportingDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSupportingDocumentRequest extends SpeakeasyBase {
    /**
     * The unique string created by Twilio to identify the Supporting Document resource.
     */
    sid: string;
}
export declare class FetchSupportingDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    numbersV2RegulatoryComplianceSupportingDocument?: shared.NumbersV2RegulatoryComplianceSupportingDocument;
}
