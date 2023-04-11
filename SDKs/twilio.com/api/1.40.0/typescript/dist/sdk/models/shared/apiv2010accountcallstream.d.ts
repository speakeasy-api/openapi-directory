import { SpeakeasyBase } from "../../../internal/utils";
import { StreamEnumStatusEnum } from "./streamenumstatusenum";
/**
 * Created
 */
export declare class ApiV2010AccountCallStream extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Stream resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Stream resource is associated with.
     */
    callSid?: string;
    /**
     * The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The user-specified name of this Stream, if one was given when the Stream was created. This may be used to stop the Stream.
     */
    name?: string;
    /**
     * The SID of the Stream resource.
     */
    sid?: string;
    status?: StreamEnumStatusEnum;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
