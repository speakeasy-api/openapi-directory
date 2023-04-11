import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ApiV2010AccountCallUserDefinedMessage extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created User Defined Message.
     */
    accountSid?: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Message is associated with.
     */
    callSid?: string;
    /**
     * The date that this User Defined Message was created, given in RFC 2822 format.
     */
    dateCreated?: string;
    /**
     * The SID that uniquely identifies this User Defined Message.
     */
    sid?: string;
}
