import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2AccountsJsonRequestBody extends SpeakeasyBase {
    /**
     * ID of the Account Tier for this Account
     */
    accountTierId?: number;
    /**
     * City
     */
    city?: string;
    /**
     * ID of the CompanyStage assigned to this Account
     */
    companyStageId?: number;
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
    /**
     * Requires Salesforce.
     *
     * @remarks
     *
     * ID of the person in your external CRM. You must provide a crm_id_type if this is included.
     *
     * Validations will be applied to the crm_id depending on the crm_id_type. A "salesforce" ID must be exactly 18 characters. A "salesforce" ID must be either an Account (001) object. The type will be validated using the 18 character ID.
     *
     * This field can only be used if your application or API key has the "account:set_crm_id" scope.
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
    customFields?: Record<string, any>[];
    /**
     * Description
     */
    description?: string;
    /**
     * Whether this company can not be contacted. Values are either true or false. Setting this to true will remove all associated people from all active communications
     */
    doNotContact?: boolean;
    /**
     * Website domain, not a fully qualified URI
     */
    domain: string;
    /**
     * Date or year of founding
     */
    founded?: string;
    /**
     * Industry
     */
    industry?: string;
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
    name: string;
    /**
     * ID of the User that owns this Account
     */
    ownerId?: number;
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
     * Website
     */
    website?: string;
}
export declare class PostV2AccountsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
