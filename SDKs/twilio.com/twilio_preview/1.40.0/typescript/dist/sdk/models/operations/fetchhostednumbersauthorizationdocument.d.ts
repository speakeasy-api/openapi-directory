import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchHostedNumbersAuthorizationDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class FetchHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this AuthorizationDocument.
     */
    sid: string;
}
export declare class FetchHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewHostedNumbersAuthorizationDocument?: shared.PreviewHostedNumbersAuthorizationDocument;
}
