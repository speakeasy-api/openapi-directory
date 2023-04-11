import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
import { PersonCounts } from "./personcounts";
/**
 * Success
 */
export declare class Person extends SpeakeasyBase {
    account?: EmbeddedResource;
    /**
     * Whether this person's current email address has bounced
     */
    bouncing?: boolean;
    /**
     * The list of active cadences person is added to
     */
    cadences?: EmbeddedResource[];
    /**
     * City
     */
    city?: string;
    /**
     * Specific methods of communication to prevent for this person. This will prevent individual execution of these communication types as well as automatically skip cadence steps of this communication type for this person in SalesLoft. Values currently accepted: call, email, message
     */
    contactRestrictions?: string[];
    /**
     * Country
     */
    country?: string;
    counts?: PersonCounts;
    /**
     * Datetime of when the person was created
     */
    createdAt?: Date;
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
     * Either the full name or the email address. Use this when showing a person's name
     */
    displayName?: string;
    /**
     * Whether or not this person has opted out of all communication. Setting this value to true prevents this person from being called, emailed, or added to a cadence in SalesLoft. If this person is currently in a cadence, they will be removed.
     */
    doNotContact?: boolean;
    /**
     * Email address
     */
    emailAddress?: string;
    /**
     * Whether this person is marked as a European Union Resident or not
     */
    euResident?: boolean;
    /**
     * First name
     */
    firstName?: string;
    /**
     * Full email address with name
     */
    fullEmailAddress?: string;
    /**
     * Home phone without formatting
     */
    homePhone?: string;
    /**
     * Person ID
     */
    id?: number;
    import?: EmbeddedResource;
    /**
     * The Job Seniority of a Person, must be one of director, executive, individual_contributor, manager, vice_president, unknown
     */
    jobSeniority?: string;
    lastCompletedStep?: EmbeddedResource;
    lastCompletedStepCadence?: EmbeddedResource;
    /**
     * Last datetime this person was contacted
     */
    lastContactedAt?: Date;
    lastContactedBy?: EmbeddedResource;
    /**
     * The type of the last touch to this person. Can be call, email, other
     */
    lastContactedType?: string;
    /**
     * Last name
     */
    lastName?: string;
    /**
     * Last datetime this person replied to an email
     */
    lastRepliedAt?: Date;
    /**
     * Linkedin URL
     */
    linkedinUrl?: string;
    /**
     * Time locale of the person
     */
    locale?: string;
    /**
     * The locale's timezone offset from UTC in minutes
     */
    localeUtcOffset?: number;
    /**
     * Mobile phone without formatting
     */
    mobilePhone?: string;
    mostRecentCadence?: EmbeddedResource;
    owner?: EmbeddedResource;
    /**
     * Mapped owner field from your CRM
     */
    ownerCrmId?: string;
    /**
     * Company industry. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
     */
    personCompanyIndustry?: string;
    /**
     * Company name. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
     */
    personCompanyName?: string;
    /**
     * Company website. This property is specific to this person, unrelated to the company object. Updating the company object associated with this person is recommended
     */
    personCompanyWebsite?: string;
    personStage?: EmbeddedResource;
    /**
     * Personal email address
     */
    personalEmailAddress?: string;
    /**
     * The website of this person
     */
    personalWebsite?: string;
    /**
     * Phone without formatting
     */
    phone?: string;
    /**
     * Phone extension without formatting
     */
    phoneExtension?: string;
    /**
     * Alternate email address
     */
    secondaryEmailAddress?: string;
    /**
     * Whether this person is starred by the current user
     */
    starred?: boolean;
    /**
     * State
     */
    state?: string;
    /**
     * The person's success count. 1 if person has any active successes, 0 otherwise.
     */
    successCount?: number;
    /**
     * All tags applied to this person
     */
    tags?: string[];
    /**
     * Job title
     */
    title?: string;
    /**
     * The twitter handle of this person
     */
    twitterHandle?: string;
    /**
     * The person's untouched status
     */
    untouched?: boolean;
    /**
     * Datetime of when the person was last updated
     */
    updatedAt?: Date;
    /**
     * Work location - city
     */
    workCity?: string;
    /**
     * Work location - country
     */
    workCountry?: string;
    /**
     * Work location - state
     */
    workState?: string;
}
