import { SpeakeasyBase } from "../../../internal/utils";
import { CredentialEnumPushServiceEnum } from "./credentialenumpushserviceenum";
/**
 * Created
 */
export declare class ChatV1Credential extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Credential resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * [APN only] Whether to send the credential to sandbox APNs. Can be `true` to send to sandbox APNs or `false` to send to production.
     */
    sandbox?: string;
    /**
     * The unique string that we created to identify the Credential resource.
     */
    sid?: string;
    type?: CredentialEnumPushServiceEnum;
    /**
     * The absolute URL of the Credential resource.
     */
    url?: string;
}
