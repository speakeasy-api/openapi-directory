import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RegistrationsContributorsReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the registration.
     */
    registrationId: string;
    /**
     * The unique identifier of the user.
     */
    userId: string;
}
/**
 * The permission level of the contributor. The default value is 'write'.
 */
export declare enum RegistrationsContributorsReadContributorAttributesPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The properties of the contributor entity.
 */
export declare class RegistrationsContributorsReadContributorAttributes extends SpeakeasyBase {
    /**
     * Whether or not the contributor will be included in citations for the node. The default value is true.
     */
    bibliographic?: boolean;
    /**
     * The position of this contributor in the list of project contributors and in project citations.
     */
    index?: number;
    /**
     * The permission level of the contributor. The default value is 'write'.
     */
    permission?: RegistrationsContributorsReadContributorAttributesPermissionEnum;
    /**
     * The assigned name of the contributor if the contributor has not yet claimed their account.
     */
    unregisteredContributor?: string;
}
/**
 * URLs to alternative representations of the contributor entity.
 */
export declare class RegistrationsContributorsReadContributorLinks extends SpeakeasyBase {
    /**
     * A link to the the canonical API endpoint for the contributor.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
 */
export declare class RegistrationsContributorsReadContributorRelationships extends SpeakeasyBase {
    /**
     * A relationship to the node that was created for the preprint, or from which the preprint was created.
     */
    node: string;
    /**
     * A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
     */
    user: string;
}
export declare class RegistrationsContributorsReadContributor extends SpeakeasyBase {
    /**
     * The properties of the contributor entity.
     */
    attributes?: RegistrationsContributorsReadContributorAttributes;
    /**
     * The identifier of the contributor entity. Contributor identifiers have the form {node_id}-{user_id}.
     */
    id?: string;
    /**
     * URLs to alternative representations of the contributor entity.
     */
    links?: RegistrationsContributorsReadContributorLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the contributor entity.
     */
    relationships: RegistrationsContributorsReadContributorRelationships;
    /**
     * The type identifier of the contributor entity (`contributors`).
     */
    type: string;
}
export declare class RegistrationsContributorsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
