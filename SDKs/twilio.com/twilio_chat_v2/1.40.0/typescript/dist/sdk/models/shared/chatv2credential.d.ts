import { SpeakeasyBase } from "../../../internal/utils";
import { CredentialEnumPushServiceEnum } from "./credentialenumpushserviceenum";
/**
 * Created
 */
export declare class ChatV2Credential extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
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
