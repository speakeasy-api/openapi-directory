import { SpeakeasyBase } from "../../../internal/utils";
export declare class FormsIndexAttributesBenefitCategories extends SpeakeasyBase {
    /**
     * Description of the benefit category of the form
     */
    description?: string;
    /**
     * Name of the benefit category of the form
     */
    name?: string;
}
export declare class FormsIndexAttributes extends SpeakeasyBase {
    /**
     * Listing of benefit categories and match
     */
    benefitCategories?: FormsIndexAttributesBenefitCategories[];
    /**
     * The timestamp at which the form was deleted
     */
    deletedAt?: Date;
    /**
     * The date the form first became available
     */
    firstIssuedOn?: Date;
    /**
     * Location on www.va.gov of the info page for this form
     */
    formDetailsUrl?: string;
    /**
     * Name of the VA Form
     */
    formName?: string;
    /**
     * Introductory text describing the VA online tool for this form
     */
    formToolIntro?: string;
    /**
     * Location of the online tool for this form
     */
    formToolUrl?: string;
    /**
     * VA Type of the form
     */
    formType?: string;
    /**
     * A description of how the form is to be used
     */
    formUsage?: string;
    /**
     * Language code of the form
     */
    language?: string;
    /**
     * The date the form was last updated
     */
    lastRevisionOn?: Date;
    /**
     * The date of the last sha256 hash change
     */
    lastSha256Change?: Date;
    /**
     * Number of pages contained in the form
     */
    pages?: number;
    /**
     * A listing of other forms that relate to current form
     */
    relatedForms?: string[];
    /**
     * A sha256 hash of the form contents
     */
    sha256?: string;
    /**
     * Title of the form as given by VA
     */
    title?: string;
    /**
     * Web location of the form
     */
    url?: string;
    /**
     * The VA organization that administers the form
     */
    vaFormAdministration?: string;
    /**
     * A flag indicating whether the form url was confirmed as a valid download
     */
    validPdf?: boolean;
}
/**
 * A listing of available VA forms and their location.
 */
export declare class FormsIndex extends SpeakeasyBase {
    attributes?: FormsIndexAttributes;
    /**
     * JSON API identifier
     */
    id?: string;
    /**
     * JSON API type specification
     */
    type?: string;
}
