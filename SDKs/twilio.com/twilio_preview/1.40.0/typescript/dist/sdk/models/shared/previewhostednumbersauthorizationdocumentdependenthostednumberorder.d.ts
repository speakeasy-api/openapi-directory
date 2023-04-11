import { SpeakeasyBase } from "../../../internal/utils";
import { DependentHostedNumberOrderEnumStatusEnum } from "./dependenthostednumberorderenumstatusenum";
import { DependentHostedNumberOrderEnumVerificationTypeEnum } from "./dependenthostednumberorderenumverificationtypeenum";
/**
 * A mapping of capabilities this hosted phone number will have enabled on Twilio's platform.
 */
export declare class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
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
     * A mapping of capabilities this hosted phone number will have enabled on Twilio's platform.
     */
    capabilities?: PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities;
    /**
     * Email recipients who will be informed when an Authorization Document has been sent and signed
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
     * A human readable description of this resource, up to 64 characters.
     */
    friendlyName?: string;
    /**
     * A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
     */
    incomingPhoneNumberSid?: string;
    /**
     * An E164 formatted phone number hosted by this HostedNumberOrder.
     */
    phoneNumber?: string;
    /**
     * A 34 character string that uniquely identifies this Authorization Document
     */
    sid?: string;
    /**
     * A 34 character string that uniquely identifies the LOA document associated with this HostedNumberOrder.
     */
    signingDocumentSid?: string;
    status?: DependentHostedNumberOrderEnumStatusEnum;
    /**
     * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
     */
    uniqueName?: string;
    /**
     * The number of attempts made to verify ownership of the phone number that is being hosted.
     */
    verificationAttempts?: number;
    /**
     * A list of 34 character strings that are unique identifiers for the calls placed as part of ownership verification.
     */
    verificationCallSids?: string[];
    /**
     * The digits passed during the ownership verification call.
     */
    verificationCode?: string;
    /**
     * A 34 character string that uniquely identifies the Identity Document resource that represents the document for verifying ownership of the number to be hosted.
     */
    verificationDocumentSid?: string;
    verificationType?: DependentHostedNumberOrderEnumVerificationTypeEnum;
}
