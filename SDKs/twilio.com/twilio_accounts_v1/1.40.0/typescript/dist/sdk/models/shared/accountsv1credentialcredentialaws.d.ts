import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class AccountsV1CredentialCredentialAws extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The unique string that we created to identify the AWS resource.
     */
    sid?: string;
    /**
     * The URI for this resource, relative to `https://accounts.twilio.com`
     */
    url?: string;
}
