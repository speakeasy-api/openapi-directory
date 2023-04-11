import { SpeakeasyBase } from "../../../internal/utils";
import { SiprecEnumStatusEnum } from "./siprecenumstatusenum";
/**
 * Created
 */
export declare class ApiV2010AccountCallSiprec extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Siprec resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Siprec resource is associated with.
     */
    callSid?: string;
    /**
     * The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The user-specified name of this Siprec, if one was given when the Siprec was created. This may be used to stop the Siprec.
     */
    name?: string;
    /**
     * The SID of the Siprec resource.
     */
    sid?: string;
    status?: SiprecEnumStatusEnum;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
