import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSupportingDocumentServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteSupportingDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSupportingDocumentRequest extends SpeakeasyBase {
    /**
     * The unique string created by Twilio to identify the Supporting Document resource.
     */
    sid: string;
}
export declare class DeleteSupportingDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
