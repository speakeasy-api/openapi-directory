import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class User extends SpeakeasyBase {
    /**
     * For internal use only. This field does not comply with our backwards compatability policies.
     */
    privateFields?: Record<string, any>;
    /**
     * Whether an user is currently active in SalesLoft
     */
    active?: boolean;
    /**
     * Address that will be BBC'd on all emails from this user
     */
    bccEmailAddress?: string;
    /**
     * Whether this user has click to call enabled
     */
    clickToCallEnabled?: boolean;
    /**
     * Datetime of when the user was created
     */
    createdAt?: Date;
    /**
     * Whether the user has a crm connected
     */
    crmConnected?: boolean;
    /**
     * Email address provided to accounts.salesloft.com
     */
    email?: string;
    /**
     * Whether this user has a email client configured
     */
    emailClientConfigured?: boolean;
    /**
     * Email address associated with the email client of the user
     */
    emailClientEmailAddress?: string;
    /**
     * Email signature
     */
    emailSignature?: string;
    /**
     * Whether this user has click tracking disabled in email signature
     */
    emailSignatureClickTrackingDisabled?: boolean;
    /**
     * Email signature type
     */
    emailSignatureType?: string;
    /**
     * Feature flags that are for this user. New flags may appear or disappear at any time
     */
    externalFeatureFlags?: Record<string, any>;
    /**
     * First name of user
     */
    firstName?: string;
    /**
     * The from address of this user
     */
    fromAddress?: string;
    /**
     * RFC 5322 compliant email address
     */
    fullEmailAddress?: string;
    group?: EmbeddedResource;
    /**
     * Globally unique user ID. New endpoints will explicitly accept this over id
     */
    guid?: string;
    /**
     * User ID
     */
    id?: number;
    /**
     * Job role of user
     */
    jobRole?: string;
    /**
     * Last name of user
     */
    lastName?: string;
    /**
     * Whether this user has Local Dial enabled
     */
    localDialEnabled?: boolean;
    /**
     * Display name of user
     */
    name?: string;
    phoneClient?: EmbeddedResource;
    phoneNumberAssignment?: EmbeddedResource;
    role?: EmbeddedResource;
    /**
     * The email address that email of the user will be sent from, resolved in the following resolution order: from_user, email_client_email_address, email
     */
    sendingEmailAddress?: string;
    /**
     * Slack username
     */
    slackUsername?: string;
    team?: EmbeddedResource;
    /**
     * Team Admin
     */
    teamAdmin?: boolean;
    /**
     * User Time Zone
     */
    timeZone?: string;
    /**
     * Twitter handle
     */
    twitterHandle?: string;
    /**
     * Datetime of when the user was last updated
     */
    updatedAt?: Date;
    /**
     * Work Country
     */
    workCountry?: string;
}
