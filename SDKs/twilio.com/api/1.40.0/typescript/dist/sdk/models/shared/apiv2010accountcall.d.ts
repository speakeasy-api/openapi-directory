import { SpeakeasyBase } from "../../../internal/utils";
import { CallEnumStatusEnum } from "./callenumstatusenum";
/**
 * Created
 */
export declare class ApiV2010AccountCall extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Call resource.
     */
    accountSid?: string;
    /**
     * Either `human` or `machine` if this call was initiated with answering machine detection. Empty otherwise.
     */
    answeredBy?: string;
    /**
     * The API version used to create the call.
     */
    apiVersion?: string;
    /**
     * The caller's name if this call was an incoming call to a phone number with caller ID Lookup enabled. Otherwise, empty.
     */
    callerName?: string;
    /**
     * The date and time in GMT that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * A string describing the direction of the call. Can be: `inbound` for inbound calls, `outbound-api` for calls initiated via the REST API or `outbound-dial` for calls initiated by a `<Dial>` verb. Using [Elastic SIP Trunking](https://www.twilio.com/docs/sip-trunking), the values can be [`trunking-terminating`](https://www.twilio.com/docs/sip-trunking#termination) for outgoing calls from your communications infrastructure to the PSTN or [`trunking-originating`](https://www.twilio.com/docs/sip-trunking#origination) for incoming calls to your communications infrastructure from the PSTN.
     */
    direction?: string;
    /**
     * The length of the call in seconds. This value is empty for busy, failed, unanswered, or ongoing calls.
     */
    duration?: string;
    /**
     * The time the call ended, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call did not complete successfully.
     */
    endTime?: string;
    /**
     * The forwarding phone number if this call was an incoming call forwarded from another number (depends on carrier supporting forwarding). Otherwise, empty.
     */
    forwardedFrom?: string;
    /**
     * The phone number, SIP address, Client identifier or SIM SID that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`.
     */
    from?: string;
    /**
     * The calling phone number, SIP address, or Client identifier formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750).
     */
    fromFormatted?: string;
    /**
     * The Group SID associated with this call. If no Group is associated with the call, the field is empty.
     */
    groupSid?: string;
    /**
     * The SID that identifies the call that created this leg.
     */
    parentCallSid?: string;
    /**
     * If the call was inbound, this is the SID of the IncomingPhoneNumber resource that received the call. If the call was outbound, it is the SID of the OutgoingCallerId resource from which the call was placed.
     */
    phoneNumberSid?: string;
    /**
     * The charge for this call, in the currency associated with the account. Populated after the call is completed. May not be immediately available.
     */
    price?: string;
    /**
     * The currency in which `Price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g., `USD`, `EUR`, `JPY`). Always capitalized for calls.
     */
    priceUnit?: string;
    /**
     * The wait time in milliseconds before the call is placed.
     */
    queueTime?: string;
    /**
     * The unique string that we created to identify this Call resource.
     */
    sid?: string;
    /**
     * The start time of the call, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call has not yet been dialed.
     */
    startTime?: string;
    status?: CallEnumStatusEnum;
    /**
     * A list of subresources available to this call, identified by their URIs relative to `https://api.twilio.com`.
     */
    subresourceUris?: Record<string, any>;
    /**
     * The phone number, SIP address, Client identifier or SIM SID that received this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`.
     */
    to?: string;
    /**
     * The phone number, SIP address or Client identifier that received this call. Formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750).
     */
    toFormatted?: string;
    /**
     * The unique identifier of the trunk resource that was used for this call. The field is empty if the call was not made using a SIP trunk or if the call is not terminated.
     */
    trunkSid?: string;
    /**
     * The URI of this resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
