import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource.
     */
    accountSid?: string;
    /**
     * A JSON string that represents the current configuration of this Add-on installation.
     */
    configuration?: any;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * A short description of the functionality that the Add-on provides.
     */
    description?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The SID of the Phone Number to which the Add-on is assigned.
     */
    resourceSid?: string;
    /**
     * The unique string that that we created to identify the resource.
     */
    sid?: string;
    /**
     * A list of related resources identified by their relative URIs.
     */
    subresourceUris?: Record<string, any>;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
