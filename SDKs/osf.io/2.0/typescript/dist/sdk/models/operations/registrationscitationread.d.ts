import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RegistrationsCitationReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the citation.
     */
    citationId: string;
    /**
     * The unique identifier of the registration.
     */
    registrationId: string;
}
/**
 * The properties of the citation entity.
 */
export declare class RegistrationsCitationReadCitationDetailAttributes extends SpeakeasyBase {
    /**
     * The list of bibliographic authors, represented as dictionaries of their given and family names, for the entitiy being cited.
     */
    author?: string;
    /**
     * The DOI for the entity being cited, if one exists.
     */
    doi?: string;
    /**
     * The publisher of the entity being cited. For nodes and registrations, the publisher is the 'Open Science Framework'. For preprints, the publisher is the same as the preprint provider.
     */
    publisher?: string;
    /**
     * The title of the entity being cited.
     */
    title?: string;
}
/**
 * URLs to alternative representations of the citation entity.
 */
export declare class RegistrationsCitationReadCitationDetailLinks extends SpeakeasyBase {
    /**
     * A link to the entity that is being cited.
     */
    self?: string;
}
/**
 * OK
 */
export declare class RegistrationsCitationReadCitationDetail extends SpeakeasyBase {
    /**
     * The properties of the citation entity.
     */
    attributes?: RegistrationsCitationReadCitationDetailAttributes;
    /**
     * The identifier of the entity being cited.
     */
    id?: string;
    /**
     * URLs to alternative representations of the citation entity.
     */
    links?: RegistrationsCitationReadCitationDetailLinks;
    /**
     * The type identifier of the citation entity (either `node-citation`, `preprint-citation`, or `registration-citation`).
     */
    type?: string;
}
export declare class RegistrationsCitationReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
