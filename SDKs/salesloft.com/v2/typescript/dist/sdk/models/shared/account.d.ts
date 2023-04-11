import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedAccountCounts } from "./embeddedaccountcounts";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class Account extends SpeakeasyBase {
    accountTier?: EmbeddedResource;
    /**
     * Datetime of when the Account was archived, if archived
     */
    archivedAt?: Date;
    /**
     * City
     */
    city?: string;
    companyStage?: EmbeddedResource;
    /**
     * Type of the Account's company
     */
    companyType?: string;
    /**
     * Conversational name of the Account
     */
    conversationalName?: string;
    /**
     * Country
     */
    country?: string;
    counts?: EmbeddedAccountCounts;
    /**
     * Datetime of when the Account was created
     */
    createdAt?: Date;
    creator?: EmbeddedResource;
    /**
     * CRM ID
     */
    crmId?: string;
    /**
     * CRM object type
     */
    crmObjectType?: string;
    /**
     * CRM url
     */
    crmUrl?: string;
    /**
     * Custom fields are defined by the user's team. Only fields with values are presented in the API.
     */
    customFields?: Record<string, any>;
    /**
     * Description
     */
    description?: string;
    /**
     * Whether this company has opted out of communications. Do not contact someone at this company when this is set to true
     */
    doNotContact?: boolean;
    /**
     * Website domain, not a fully qualified URI
     */
    domain?: string;
    /**
     * Date or year of founding
     */
    founded?: string;
    /**
     * ID of Account
     */
    id?: number;
    /**
     * Industry
     */
    industry?: string;
    /**
     * Datetime this Account was last contacted
     */
    lastContactedAt?: Date;
    lastContactedBy?: EmbeddedResource;
    lastContactedPerson?: EmbeddedResource;
    /**
     * The type of the last touch to this Account. Can be call, email, other
     */
    lastContactedType?: string;
    /**
     * Full LinkedIn url
     */
    linkedinUrl?: string;
    /**
     * Time locale
     */
    locale?: string;
    /**
     * Account Full Name
     */
    name?: string;
    owner?: EmbeddedResource;
    /**
     * Mapped owner field from the CRM
     */
    ownerCrmId?: string;
    /**
     * Phone number without formatting
     */
    phone?: string;
    /**
     * Postal code
     */
    postalCode?: string;
    /**
     * Estimated revenue range
     */
    revenueRange?: string;
    /**
     * Estimated number of people in employment
     */
    size?: string;
    /**
     * State
     */
    state?: string;
    /**
     * Street name and number
     */
    street?: string;
    /**
     * All tags applied to this Account
     */
    tags?: string[];
    /**
     * Twitter handle, with @
     */
    twitterHandle?: string;
    /**
     * Datetime of when the Account was last updated
     */
    updatedAt?: Date;
    /**
     * Filters by accounts matching all given user relationship fields, _is_null or _unmapped can be passed to filter accounts with null or unmapped user relationship values
     */
    userRelationships?: Record<string, any>;
    /**
     * Website
     */
    website?: string;
}
