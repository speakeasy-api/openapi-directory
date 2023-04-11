import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateHostedNumbersHostedNumberOrderServerList: readonly ["https://preview.twilio.com"];
export declare class CreateHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method that should be used to request the SmsFallbackUrl. Must be either `GET` or `POST`. This will be copied onto the IncomingPhoneNumber resource.
 */
export declare enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method that should be used to request the SmsUrl. Must be either `GET` or `POST`.  This will be copied onto the IncomingPhoneNumber resource.
 */
export declare enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * Optional. The Status Callback Method attached to the IncomingPhoneNumber resource.
 */
export declare enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    /**
     * This defaults to the AccountSid of the authorization the user is using. This can be provided to specify a subaccount to add the HostedNumberOrder to.
     */
    accountSid?: string;
    /**
     * Optional. A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number.
     */
    addressSid?: string;
    /**
     * Optional. A list of emails that the LOA document for this HostedNumberOrder will be carbon copied to.
     */
    ccEmails?: string[];
    /**
     * Optional. Email of the owner of this phone number that is being hosted.
     */
    email?: string;
    /**
     * A 64 character string that is a human readable text that describes this resource.
     */
    friendlyName?: string;
    /**
     * The number to host in [+E.164](https://en.wikipedia.org/wiki/E.164) format
     */
    phoneNumber: string;
    /**
     * Optional. The 34 character sid of the application Twilio should use to handle SMS messages sent to this number. If a `SmsApplicationSid` is present, Twilio will ignore all of the SMS urls above and use those set on the application.
     */
    smsApplicationSid?: string;
    /**
     * Used to specify that the SMS capability will be hosted on Twilio's platform.
     */
    smsCapability: boolean;
    /**
     * The HTTP method that should be used to request the SmsFallbackUrl. Must be either `GET` or `POST`. This will be copied onto the IncomingPhoneNumber resource.
     */
    smsFallbackMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum;
    /**
     * A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by SmsUrl. This will be copied onto the IncomingPhoneNumber resource.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method that should be used to request the SmsUrl. Must be either `GET` or `POST`.  This will be copied onto the IncomingPhoneNumber resource.
     */
    smsMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum;
    /**
     * The URL that Twilio should request when somebody sends an SMS to the phone number. This will be copied onto the IncomingPhoneNumber resource.
     */
    smsUrl?: string;
    /**
     * Optional. The Status Callback Method attached to the IncomingPhoneNumber resource.
     */
    statusCallbackMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum;
    /**
     * Optional. The Status Callback URL attached to the IncomingPhoneNumber resource.
     */
    statusCallbackUrl?: string;
    /**
     * Optional. Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
     */
    uniqueName?: string;
    /**
     * Optional. The unique sid identifier of the Identity Document that represents the document for verifying ownership of the number to be hosted. Required when VerificationType is phone-bill.
     */
    verificationDocumentSid?: string;
    verificationType?: shared.HostedNumberOrderEnumVerificationTypeEnum;
}
export declare class CreateHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
