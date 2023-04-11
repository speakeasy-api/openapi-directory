import { SpeakeasyBase } from "../../../internal/utils";
import { HostedNumberOrderEnumStatusEnum } from "./hostednumberorderenumstatusenum";
import { HostedNumberOrderEnumVerificationTypeEnum } from "./hostednumberorderenumverificationtypeenum";
/**
 * Set of booleans describing the capabilities hosted on Twilio's platform. SMS is currently only supported.
 */
export declare class PreviewHostedNumbersHostedNumberOrderCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
/**
 * Created
 */
export declare class PreviewHostedNumbersHostedNumberOrder extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies the account.
     */
    accountSid?: string;
    /**
     * A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number.
     */
    addressSid?: string;
    /**
     * A value between 0-30 specifying the number of seconds to delay initiating the ownership verification call.
     */
    callDelay?: number;
    /**
     * Set of booleans describing the capabilities hosted on Twilio's platform. SMS is currently only supported.
     */
    capabilities?: PreviewHostedNumbersHostedNumberOrderCapabilities;
    /**
     * A list of emails that LOA document for this HostedNumberOrder will be carbon copied to.
     */
    ccEmails?: string[];
    /**
     * The date this resource was created, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was updated, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * Email of the owner of this phone number that is being hosted.
     */
    email?: string;
    /**
     * A numerical extension to be used when making the ownership verification call.
     */
    extension?: string;
    /**
     * A message that explains why a hosted_number_order went to status "action-required"
     */
    failureReason?: string;
    /**
     * A 64 character string that is a human-readable text that describes this resource.
     */
    friendlyName?: string;
    /**
     * A 34 character string that uniquely identifies the [IncomingPhoneNumber](https://www.twilio.com/docs/api/rest/incoming-phone-numbers) resource that represents the phone number being hosted.
     */
    incomingPhoneNumberSid?: string;
    /**
     * Phone number to be hosted. This must be in [E.164](https://en.wikipedia.org/wiki/E.164) format, e.g., +16175551212
     */
    phoneNumber?: string;
    /**
     * A 34 character string that uniquely identifies this HostedNumberOrder.
     */
    sid?: string;
    /**
     * A 34 character string that uniquely identifies the [Authorization Document](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents) the user needs to sign.
     */
    signingDocumentSid?: string;
    status?: HostedNumberOrderEnumStatusEnum;
    /**
     * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
     */
    uniqueName?: string;
    /**
     * The URL of this HostedNumberOrder.
     */
    url?: string;
    /**
     * The number of attempts made to verify ownership of the phone number that is being hosted.
     */
    verificationAttempts?: number;
    /**
     * A list of 34 character strings that are unique identifiers for the calls placed as part of ownership verification.
     */
    verificationCallSids?: string[];
    /**
     * A verification code provided in the response for a user to enter when they pick up the phone call.
     */
    verificationCode?: string;
    /**
     * A 34 character string that uniquely identifies the Identity Document resource that represents the document for verifying ownership of the number to be hosted.
     */
    verificationDocumentSid?: string;
    verificationType?: HostedNumberOrderEnumVerificationTypeEnum;
}
