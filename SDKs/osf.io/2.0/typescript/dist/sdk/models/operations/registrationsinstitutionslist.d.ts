import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RegistrationsInstitutionsListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the registration.
     */
    registrationId: string;
}
/**
 * The properties of the institution entity.
 */
export declare class RegistrationsInstitutionsListInstitutionAttributes extends SpeakeasyBase {
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
export declare class RegistrationsInstitutionsListInstitutionLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for the institution.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the institution entity.
 */
export declare class RegistrationsInstitutionsListInstitutionRelationships extends SpeakeasyBase {
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
export declare class RegistrationsInstitutionsListInstitution extends SpeakeasyBase {
    /**
     * The properties of the institution entity.
     */
    attributes?: RegistrationsInstitutionsListInstitutionAttributes;
    /**
     * The identifier of the institution entity.
     */
    id?: string;
    /**
     * URLs to alternative representations of the institutions entity.
     */
    links?: RegistrationsInstitutionsListInstitutionLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the institution entity.
     */
    relationships?: RegistrationsInstitutionsListInstitutionRelationships;
    /**
     * The type identifier of the institution entity (`institutions`).
     */
    type?: string;
}
export declare class RegistrationsInstitutionsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
