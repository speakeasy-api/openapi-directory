import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DraftRegistrationsCreateDraftRegistrationAttributesNodeLicense extends SpeakeasyBase {
    /**
     * A list of names of copyright holders for the license.
     */
    copyrightHolders?: string[];
    /**
     * The year the copyright was made.
     */
    year?: number;
}
/**
 * The properties of the Draft Registration entity.
 */
export declare class DraftRegistrationsCreateDraftRegistrationAttributesInput extends SpeakeasyBase {
    /**
     * The category of the Draft Registration.
     */
    category?: string;
    /**
     * The description of the Draft Registration.
     */
    description?: string;
    nodeLicense?: DraftRegistrationsCreateDraftRegistrationAttributesNodeLicense;
    /**
     * This is a legacy format for `registration_responses`.
     */
    registrationMetadata?: Record<string, any>;
    /**
     * A dictionary of question IDs and responses from the registration schema.
     */
    registrationResponses?: Record<string, any>;
    /**
     * The searchable tags of the Draft Registration.
     */
    tags?: string[];
    /**
     * The title of the Draft Registration.
     */
    title?: string;
}
export declare class DraftRegistrationsCreateDraftRegistrationInput extends SpeakeasyBase {
    /**
     * The properties of the Draft Registration entity.
     */
    attributes: DraftRegistrationsCreateDraftRegistrationAttributesInput;
}
/**
 * The properties of the Draft Registration entity.
 */
export declare class DraftRegistrationsCreateDraftRegistrationAttributes extends SpeakeasyBase {
    /**
     * The category of the Draft Registration.
     */
    category?: string;
    /**
     * The current users permission level for the Draft Registration.
     */
    currentUserPermissions?: string[];
    /**
     * The time at which the draft registration was first initiated, as an iso8601 formatted timestamp.
     */
    datetimeInitiated?: Date;
    /**
     * The time at which the draft registration was last updated, as an iso8601 formatted timestamp.
     */
    datetimeUpdated?: Date;
    /**
     * The description of the Draft Registration.
     */
    description?: string;
    /**
     * This indicates whether a Draft Registration was branched from a project.
     */
    hasProject?: boolean;
    nodeLicense?: DraftRegistrationsCreateDraftRegistrationAttributesNodeLicense;
    /**
     * This is a legacy format for `registration_responses`.
     */
    registrationMetadata?: Record<string, any>;
    /**
     * A dictionary of question IDs and responses from the registration schema.
     */
    registrationResponses?: Record<string, any>;
    /**
     * The searchable tags of the Draft Registration.
     */
    tags?: string[];
    /**
     * The title of the Draft Registration.
     */
    title?: string;
}
/**
 * URLs to alternative representations of the draft registration entity.
 */
export declare class DraftRegistrationsCreateDraftRegistrationLinks extends SpeakeasyBase {
    /**
     * A link to the draft registration's page on the OSF.
     */
    html: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the draft registration entity.
 */
export declare class DraftRegistrationsCreateDraftRegistrationRelationships extends SpeakeasyBase {
    /**
     * A link to the node that this draft registration was created from.
     */
    branchedFrom?: string;
    /**
     * A link to the user who initiated the draft registration.
     */
    initiator?: string;
    /**
     * A link to the detailed registration schema that this draft conforms to.
     */
    registrationSchema?: string;
}
/**
 * Created
 */
export declare class DraftRegistrationsCreateDraftRegistration extends SpeakeasyBase {
    /**
     * The properties of the Draft Registration entity.
     */
    attributes: DraftRegistrationsCreateDraftRegistrationAttributes;
    /**
     * The unique identifier of the draft registration entity.
     */
    id: string;
    /**
     * URLs to alternative representations of the draft registration entity.
     */
    links: DraftRegistrationsCreateDraftRegistrationLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the draft registration entity.
     */
    relationships: DraftRegistrationsCreateDraftRegistrationRelationships;
    /**
     * The type identifier of the draft registration entity (`draft_registrations`).
     */
    type: string;
}
export declare class DraftRegistrationsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
