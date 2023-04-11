import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewMarketplaceInstalledAddOn extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the InstalledAddOn resource.
     */
    accountSid?: string;
    /**
     * The JSON object that represents the current configuration of installed Add-on.
     */
    configuration?: any;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * A short description of the Add-on's functionality.
     */
    description?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The unique string that we created to identify the InstalledAddOn resource. This Sid can also be found in the Console on that specific Add-ons page as the 'Available Add-on Sid'.
     */
    sid?: string;
    /**
     * An application-defined string that uniquely identifies the resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
