import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The category of the registered node.
 */
export declare enum RegistrationsListRegistrationAttributesCategoryEnum {
    Analysis = "analysis",
    Communication = "communication",
    Data = "data",
    Hypothesis = "hypothesis",
    Instrumentation = "instrumentation",
    MethodsAndMeasures = "methods and measures",
    Procedure = "procedure",
    Project = "project",
    Software = "software",
    Other = "other"
}
/**
 * The properties of the registration entity.
 */
export declare class RegistrationsListRegistrationAttributes extends SpeakeasyBase {
    /**
     * The category of the registered node.
     */
    category?: RegistrationsListRegistrationAttributesCategoryEnum;
    /**
     * Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.
     */
    collection?: boolean;
    /**
     * Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.
     */
    currentUserCanComment?: boolean;
    /**
     * A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".
     */
    currentUserPermissions?: string[];
    /**
     * The time at which the registered node was created, as an iso8601 formatted timestamp.
     */
    dateCreated?: Date;
    /**
     * The time at which the registered node was last modified, as an iso8601 formatted timestamp.
     */
    dateModified?: Date;
    /**
     * The time at which this registration was created, as an iso8601 formatted timestamp.
     */
    dateRegistered?: Date;
    /**
     * The time at which this registration was withdrawn, as an iso8601 formatted timestamp.
     */
    dateWithdrawn?: Date;
    /**
     * The description of the registered node.
     */
    description?: string;
    /**
     * The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.
     */
    embargoEndDate?: Date;
    /**
     * Whether or not this registration represents a fork of another node.
     */
    fork?: boolean;
    /**
     * A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).
     */
    nodeLicense?: string;
    /**
     * Whether or not the embargo associated with this registration is pending approval from project administrators.
     */
    pendingEmbargoApproval?: boolean;
    /**
     * Whether or not the registration is pending approval from project administrators.
     */
    pendingRegistrationApproval?: boolean;
    /**
     * Whether or not the registration is pending approval for withdrawal from project administrators.
     */
    pendingWithdrawal?: boolean;
    /**
     * Whether or not a preprint has been created from this node, or if this node was created for a preprint.
     */
    preprint?: boolean;
    /**
     * Whether or not the registration is publicly visible.
     */
    public?: boolean;
    /**
     * A dictionary with supplemental registration questions and responses.
     */
    registeredMeta?: string;
    /**
     * Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.
     */
    registration?: boolean;
    /**
     * The title of the registration schema this registration conforms to.
     */
    registrationSupplement?: string;
    /**
     * A list of strings that describe the registered node.
     */
    tags?: string[];
    /**
     * The unique ID of the node from which the registered node was templated, if the registered node was created from a template.
     */
    templateFrom?: string;
    /**
     * The title of the registered node.
     */
    title?: string;
    /**
     * The reasoning for why this registration was withdrawn, as entered by the administrator that initiated the withdrawal.
     */
    withdrawalJustification?: string;
    /**
     * Whether or not this registration has been withdrawn.
     */
    withdrawn?: boolean;
}
/**
 * URLs to alternative representations of the registrations entity.
 */
export declare class RegistrationsListRegistrationLinks extends SpeakeasyBase {
    /**
     * A link to the registration's page on the OSF.
     */
    html?: string;
    /**
     * A link to the canonical API endpoint of this registration.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the registration entity.
 */
export declare class RegistrationsListRegistrationRelationships extends SpeakeasyBase {
    /**
     * A link to the list of institutions this registration is affiliated with.
     */
    affiliatedInstitutions?: string;
    /**
     * A link to the list of the registered node's children (components).
     */
    children?: string;
    /**
     * A link to the citation details of this registration.
     */
    citation?: string;
    /**
     * A link to the list of comments on this registration.
     */
    comments?: string;
    /**
     * A link to the list of contributors on this registration.
     */
    contributors?: string;
    /**
     * A link to the list of storage providers that have been enabled on this registration.
     */
    files?: string;
    /**
     * A link to the list of nodes that are forks of this registration.
     */
    forks?: string;
    /**
     * A link to the list of identifiers for this registration (i.e. ARK and DOI identifiers).
     */
    identifiers?: string;
    /**
     * A link to the list of nodes that are linked to this registration.
     */
    linkedNodes?: string;
    /**
     * A link to the list of log actions pertaining to this registration.
     */
    logs?: string;
    /**
     * A link to the list of nodes that are linked to this registration. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
     */
    nodeLinks?: string;
    /**
     * A link to the node that is the direct parent of the current registration, if the current registration is a child registration.
     */
    parent?: string;
    /**
     * A link to the user that initiated this registration.
     */
    registeredBy?: string;
    /**
     * A link to the node that this registration was registered from.
     */
    registeredFrom?: string;
    /**
     * A link to the metaschema that this registration conforms to.
     */
    registrationSchema?: string;
    /**
     * A link to the node that is the top-level parent of the current registration. If the current registration is the top-level node, the root is the current registration.
     */
    root?: string;
    /**
     * A link to the list of view only links that have been created for this registration.
     */
    viewOnlyLinks?: string;
    /**
     * A link to the list of wiki pages for this registration.
     */
    wikis?: string;
}
export declare class RegistrationsListRegistration extends SpeakeasyBase {
    /**
     * The properties of the registration entity.
     */
    attributes: RegistrationsListRegistrationAttributes;
    /**
     * The unique identifier of the registration.
     */
    id: string;
    /**
     * URLs to alternative representations of the registrations entity.
     */
    links: RegistrationsListRegistrationLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the registration entity.
     */
    relationships: RegistrationsListRegistrationRelationships;
    /**
     * The type identifier of the registration entity (`registrations`).
     */
    type: string;
}
export declare class RegistrationsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
