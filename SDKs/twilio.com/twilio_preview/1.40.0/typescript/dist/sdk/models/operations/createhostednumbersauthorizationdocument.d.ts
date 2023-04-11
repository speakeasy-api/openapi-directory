import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateHostedNumbersAuthorizationDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class CreateHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies the Address resource that is associated with this AuthorizationDocument.
     */
    addressSid: string;
    /**
     * Email recipients who will be informed when an Authorization Document has been sent and signed.
     */
    ccEmails?: string[];
    /**
     * The contact phone number of the person authorized to sign the Authorization Document.
     */
    contactPhoneNumber: string;
    /**
     * The title of the person authorized to sign the Authorization Document for this phone number.
     */
    contactTitle: string;
    /**
     * Email that this AuthorizationDocument will be sent to for signing.
     */
    email: string;
    /**
     * A list of HostedNumberOrder sids that this AuthorizationDocument will authorize for hosting phone number capabilities on Twilio's platform.
     */
    hostedNumberOrderSids: string[];
}
export declare class CreateHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewHostedNumbersAuthorizationDocument?: shared.PreviewHostedNumbersAuthorizationDocument;
}
