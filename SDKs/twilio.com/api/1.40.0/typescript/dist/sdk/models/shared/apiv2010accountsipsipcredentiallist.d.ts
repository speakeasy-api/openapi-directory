import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ApiV2010AccountSipSipCredentialList extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) that owns this resource.
     */
    accountSid?: string;
    /**
     * The date that this resource was created, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
     */
    dateCreated?: string;
    /**
     * The date that this resource was last updated, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
     */
    dateUpdated?: string;
    /**
     * A human readable descriptive text that describes the CredentialList, up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * A list of credentials associated with this credential list.
     */
    subresourceUris?: Record<string, any>;
    /**
     * The URI for this resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
