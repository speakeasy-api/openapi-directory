import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ApiV2010AccountSipSipDomainSipCredentialListMapping extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
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
     * The unique string that is created to identify the SipDomain resource.
     */
    domainSid?: string;
    /**
     * A human readable descriptive text for this resource, up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * The URI for this resource, relative to `https://api.twilio.com`
     */
    uri?: string;
}
