import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateHostedNumbersHostedNumberOrderServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    /**
     * The number of seconds, between 0 and 60, to delay before initiating the verification call. Defaults to 0.
     */
    callDelay?: number;
    /**
     * Optional. A list of emails that LOA document for this HostedNumberOrder will be carbon copied to.
     */
    ccEmails?: string[];
    /**
     * Email of the owner of this phone number that is being hosted.
     */
    email?: string;
    /**
     * Digits to dial after connecting the verification call.
     */
    extension?: string;
    /**
     * A 64 character string that is a human readable text that describes this resource.
     */
    friendlyName?: string;
    status?: shared.HostedNumberOrderEnumStatusEnum;
    /**
     * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
     */
    uniqueName?: string;
    /**
     * A verification code that is given to the user via a phone call to the phone number that is being hosted.
     */
    verificationCode?: string;
    /**
     * Optional. The unique sid identifier of the Identity Document that represents the document for verifying ownership of the number to be hosted. Required when VerificationType is phone-bill.
     */
    verificationDocumentSid?: string;
    verificationType?: shared.HostedNumberOrderEnumVerificationTypeEnum;
}
export declare class UpdateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    requestBody?: UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest;
    sid: string;
}
export declare class UpdateHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
