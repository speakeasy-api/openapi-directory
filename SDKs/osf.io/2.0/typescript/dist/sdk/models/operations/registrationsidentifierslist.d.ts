import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RegistrationsIdentifiersListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the registration.
     */
    registrationId: string;
}
/**
 * The category of the identifier
 */
export declare enum RegistrationsIdentifiersListIdentifierAttributesCategoryEnum {
    Ark = "ark",
    Doi = "doi"
}
/**
 * The properties of the identifier entity.
 */
export declare class RegistrationsIdentifiersListIdentifierAttributes extends SpeakeasyBase {
    /**
     * The category of the identifier
     */
    category?: RegistrationsIdentifiersListIdentifierAttributesCategoryEnum;
    /**
     * The identifier value itself
     */
    value?: string;
}
/**
 * URLs to alternative representations of the identifier entity.
 */
export declare class RegistrationsIdentifiersListIdentifierLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for the identifier.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the identifier entity.
 */
export declare class RegistrationsIdentifiersListIdentifierRelationships extends SpeakeasyBase {
    /**
     * A relationship to the node the identifier refers to.
     */
    referent?: string;
}
export declare class RegistrationsIdentifiersListIdentifier extends SpeakeasyBase {
    /**
     * The properties of the identifier entity.
     */
    attributes?: RegistrationsIdentifiersListIdentifierAttributes;
    /**
     * The identifier of the identifier entity.
     */
    id?: string;
    /**
     * URLs to alternative representations of the identifier entity.
     */
    links?: RegistrationsIdentifiersListIdentifierLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the identifier entity.
     */
    relationships?: RegistrationsIdentifiersListIdentifierRelationships;
    /**
     * The type identifier of the identifier entity (`identifiers`).
     */
    type?: string;
}
export declare class RegistrationsIdentifiersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
