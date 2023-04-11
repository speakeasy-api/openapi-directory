import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource.
     */
    accountSid?: string;
    /**
     * The SID that uniquely identifies the assigned Add-on installation.
     */
    assignedAddOnSid?: string;
    /**
     * Whether the Extension will be invoked.
     */
    enabled?: boolean;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * A string that you assigned to describe the Product this Extension is used within.
     */
    productName?: string;
    /**
     * The SID of the Phone Number to which the Add-on is assigned.
     */
    resourceSid?: string;
    /**
     * The unique string that that we created to identify the resource.
     */
    sid?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
