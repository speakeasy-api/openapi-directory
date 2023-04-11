import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSupportingDocumentServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateSupportingDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSupportingDocumentCreateSupportingDocumentRequest extends SpeakeasyBase {
    /**
     * The set of parameters that are the attributes of the Supporting Documents resource which are derived Supporting Document Types.
     */
    attributes?: any;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName: string;
    /**
     * The type of the Supporting Document.
     */
    type: string;
}
export declare class CreateSupportingDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    trusthubV1SupportingDocument?: shared.TrusthubV1SupportingDocument;
}
