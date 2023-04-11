import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesChildrenListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
}
/**
 * The category of the node, as selected by project contributors.
 */
export declare enum NodesChildrenListNodeAttributesCategoryEnum {
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
 * The properties of the node entity.
 */
export declare class NodesChildrenListNodeAttributes extends SpeakeasyBase {
    /**
     * The category of the node, as selected by project contributors.
     */
    category: NodesChildrenListNodeAttributesCategoryEnum;
    /**
     * Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
     */
    collection?: boolean;
    /**
     * Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
     */
    currentUserCanComment?: boolean;
    /**
     * A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
     */
    currentUserPermissions?: string[];
    /**
     * The time at which the node was created, as an iso8601 formatted timestamp.
     */
    dateCreated?: Date;
    /**
     * The time at which the node was last modified, as an iso8601 formatted timestamp.
     */
    dateModified?: Date;
    /**
     * The description of the node.
     */
    description?: string;
    /**
     * Whether or not this node represents a fork of another node.
     */
    fork?: boolean;
    /**
     * If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
     */
    forkedDate?: Date;
    /**
     * A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
     */
    nodeLicense?: string;
    /**
     * Whether or not a preprint has been created from this node, or if this node was created for a preprint.
     */
    preprint?: boolean;
    /**
     * Whether or not the node is publicly visible. This field is only editable by project administrators.
     */
    public?: boolean;
    /**
     * Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
     */
    registration?: boolean;
    /**
     * A list of strings that describe this node, as entered by project contributors.
     */
    tags?: string[];
    /**
     * The unique ID of the node from which this node was templated, if this node was created from a template.
     */
    templateFrom?: string;
    /**
     * The title of the node.
     */
    title: string;
}
/**
 * URLs to alternative representations of the node entity.
 */
export declare class NodesChildrenListNodeLinks extends SpeakeasyBase {
    /**
     * A link to the node's page on the OSF.
     */
    html?: string;
    /**
     * A link to the canonical API endpoint of this node.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the node entity.
 */
export declare class NodesChildrenListNodeRelationships extends SpeakeasyBase {
    /**
     * A link to the list of institutions this node is affiliated with.
     */
    affiliatedInstitutions?: string;
    /**
     * A link to the list of this node's children (components).
     */
    children?: string;
    /**
     * A link to the citation details of this node.
     */
    citation?: string;
    /**
     * A link to the list of comments on this node.
     */
    comments?: string;
    /**
     * A link to the list of contributors on this node.
     */
    contributors?: string;
    /**
     * A link to the list of registrations that have been initiated from this node and are still in a draft state.
     */
    draftRegistrations?: string;
    /**
     * A link to the list of storage providers that have been enabled on this node.
     */
    files?: string;
    /**
     * A link to the node which this node was forked from, if this node is a fork.
     */
    forkedFrom?: string;
    /**
     * A link to the list of nodes that are forks of this node.
     */
    forks?: string;
    /**
     * A link to the list of identifiers for this node (i.e. ARK and DOI identifiers).
     */
    identifiers?: string;
    /**
     * A link to the license that has been applied to this node.
     */
    license?: string;
    /**
     * A link to the list of nodes that are linked to the current node.
     */
    linkedNodes?: string;
    /**
     * A link to the list of log actions pertaining to this node.
     */
    logs?: string;
    /**
     * A link to the list of nodes that are linked to the current node. This field is deprecated as of verson 2.1; use the linked_nodes link instead.
     */
    nodeLinks?: string;
    /**
     * A link to the node that is the direct parent of the current node, if the current node is a child node.
     */
    parent?: string;
    /**
     * A link to the list of preprints that this node relates to.
     */
    preprints?: string;
    /**
     * A link to the list of registrations that have been created from this node.
     */
    registrations?: string;
    /**
     * A link to the node that is the top-level parent of the current node. If the current node is the top-level node, the root is the current node.
     */
    root?: string;
    /**
     * A link to the node that the current node was templated from, if the current node was created from a template.
     */
    templateNode?: string;
    /**
     * A link to the list of view only links that have been created for this node.
     */
    viewOnlyLinks?: string;
    /**
     * A link to the list of wiki pages for this node.
     */
    wikis?: string;
}
export declare class NodesChildrenListNode extends SpeakeasyBase {
    /**
     * The properties of the node entity.
     */
    attributes: NodesChildrenListNodeAttributes;
    /**
     * The unique identifier of the node entity.
     */
    id?: string;
    /**
     * URLs to alternative representations of the node entity.
     */
    links?: NodesChildrenListNodeLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the node entity.
     */
    relationships?: NodesChildrenListNodeRelationships;
    /**
     * The type identifier of the node entity (`nodes`).
     */
    type: string;
}
export declare class NodesChildrenListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
