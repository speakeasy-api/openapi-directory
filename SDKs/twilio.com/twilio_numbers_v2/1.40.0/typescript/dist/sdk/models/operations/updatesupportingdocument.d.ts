import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSupportingDocumentServerList: readonly ["https://numbers.twilio.com"];
export declare class UpdateSupportingDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSupportingDocumentUpdateSupportingDocumentRequest extends SpeakeasyBase {
    /**
     * The set of parameters that are the attributes of the Supporting Document resource which are derived Supporting Document Types.
     */
    attributes?: any;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
}
export declare class UpdateSupportingDocumentRequest extends SpeakeasyBase {
    requestBody?: UpdateSupportingDocumentUpdateSupportingDocumentRequest;
    /**
     * The unique string created by Twilio to identify the Supporting Document resource.
     */
    sid: string;
}
export declare class UpdateSupportingDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    numbersV2RegulatoryComplianceSupportingDocument?: shared.NumbersV2RegulatoryComplianceSupportingDocument;
}
