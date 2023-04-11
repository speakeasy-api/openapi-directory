import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ApiV2010AccountCallPayments extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Payments resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Payments resource is associated with. This will refer to the call sid that is producing the payment card (credit/ACH) information thru DTMF.
     */
    callSid?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The SID of the Payments resource.
     */
    sid?: string;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
