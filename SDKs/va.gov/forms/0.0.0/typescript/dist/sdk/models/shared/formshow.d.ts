import { SpeakeasyBase } from "../../../internal/utils";
export declare class FormShowAttributesBenefitCategories extends SpeakeasyBase {
    /**
     * Description of the benefit category of the form
     */
    description?: string;
    /**
     * Name of the benefit category of the form
     */
    name?: string;
}
export declare class FormShowAttributesVersions extends SpeakeasyBase {
    /**
     * The date the sha256 hash was calculated
     */
    revisionOn?: Date;
    /**
     * A sha256 hash of the form contents for that version
     */
    sha256?: string;
}
export declare class FormShowAttributes extends SpeakeasyBase {
    /**
     * Listing of benefit categories and match
     */
    benefitCategories?: FormShowAttributesBenefitCategories[];
    /**
     * Internal field for VA.gov use
     */
    createdAt?: Date;
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
    /**
     * The version history of revisions to the form
     */
    versions?: FormShowAttributesVersions[];
}
/**
 * Data for a particular VA form, including form version history.
 */
export declare class FormShow extends SpeakeasyBase {
    attributes?: FormShowAttributes;
    /**
     * JSON API identifier
     */
    id?: string;
    /**
     * JSON API type specification
     */
    type?: string;
}
