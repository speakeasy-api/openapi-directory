import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDraftRegistrationsDraftIdInstitutionsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the draft registration.
     */
    draftId: string;
}
/**
 * The properties of the institution entity.
 */
export declare class GetDraftRegistrationsDraftIdInstitutionsInstitutionAttributes extends SpeakeasyBase {
    /**
     * Url used to authenticate institution specific login.
     */
    authUrl?: string;
    /**
     * Description of the institution.
     */
    description?: string;
    /**
     * Static path to the institution specific logo.
     */
    logoPath?: string;
    /**
     * Full name of the institution.
     */
    name?: string;
}
/**
 * URLs to alternative representations of the institutions entity.
 */
export declare class GetDraftRegistrationsDraftIdInstitutionsInstitutionLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for the institution.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the institution entity.
 */
export declare class GetDraftRegistrationsDraftIdInstitutionsInstitutionRelationships extends SpeakeasyBase {
    /**
     * A relationship to the nodes affiliated with the institution.
     */
    nodes?: string;
    /**
     * A relationship to the registrations affiliated with the institution.
     */
    registrations?: string;
    /**
     * A relationship to the users affiliated with the institution.
     */
    users?: string;
}
/**
 * OK
 */
export declare class GetDraftRegistrationsDraftIdInstitutionsInstitution extends SpeakeasyBase {
    /**
     * The properties of the institution entity.
     */
    attributes?: GetDraftRegistrationsDraftIdInstitutionsInstitutionAttributes;
    /**
     * The identifier of the institution entity.
     */
    id?: string;
    /**
     * URLs to alternative representations of the institutions entity.
     */
    links?: GetDraftRegistrationsDraftIdInstitutionsInstitutionLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the institution entity.
     */
    relationships?: GetDraftRegistrationsDraftIdInstitutionsInstitutionRelationships;
    /**
     * The type identifier of the institution entity (`institutions`).
     */
    type?: string;
}
export declare class GetDraftRegistrationsDraftIdInstitutionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
