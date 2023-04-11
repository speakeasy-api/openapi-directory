import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2PeopleJsonRequestBody extends SpeakeasyBase {
    /**
     * ID of the Account to link this person to
     */
    accountId?: number;
    /**
     * Whether the date should be added to this person as a tag. Default is false. The tag will be Y-m-d format.
     */
    autotagDate?: boolean;
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
    /**
     * Requires Salesforce.
     *
     * @remarks
     *
     * ID of the person in your external CRM. You must provide a crm_id_type if this is included.
     *
     * Validations will be applied to the crm_id depending on the crm_id_type. A "salesforce" ID must be exactly 18 characters. A "salesforce" ID must be either a Lead (00Q) or Contact (003) object. The type will be validated using the 18 character ID.
     *
     * This field can only be used if your application or API key has the "person:set_crm_id" scope.
     *
     *
     */
    crmId?: string;
    /**
     * The CRM that the provided crm_id is for. Must be one of: salesforce
     */
    crmIdType?: string;
    /**
     * Custom fields are defined by the user's team. Only fields with values are presented in the API.
     */
    customFields?: Record<string, any>;
    /**
     * Whether or not this person has opted out of all communication. Setting this value to true prevents this person from being called, emailed, or added to a cadence in SalesLoft. If this person is currently in a cadence, they will be removed.
     */
    doNotContact?: boolean;
    /**
     * Email address
     */
    emailAddress?: string;
    /**
     * First name
     */
    firstName?: string;
    /**
     * Home phone without formatting
     */
    homePhone?: string;
    /**
     * ID of the Import this person is a part of. A person can be part of multiple imports, but this ID will always be the most recent Import
     */
    importId?: number;
    /**
     * The Job Seniority of a Person, must be one of director, executive, individual_contributor, manager, vice_president, unknown
     */
    jobSeniority?: string;
    /**
     * Last name
     */
    lastName?: string;
    /**
     * Linkedin URL
     */
    linkedinUrl?: string;
    /**
     * Time locale of the person
     */
    locale?: string;
    /**
     * Mobile phone without formatting
     */
    mobilePhone?: string;
    /**
     * ID of the User that owns this person
     */
    ownerId?: number;
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
    /**
     * ID of the PersonStage of this person
     */
    personStageId?: number;
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
     * State
     */
    state?: string;
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
export declare class PostV2PeopleJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
