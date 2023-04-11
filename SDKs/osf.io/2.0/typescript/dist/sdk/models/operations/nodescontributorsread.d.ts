import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesContributorsReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
    /**
     * The unique identifier of the user.
     */
    userId: string;
}
/**
 * The permission level of the contributor. The default value is 'write'.
 */
export declare enum NodesContributorsReadContributorAttributesPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The properties of the contributor entity.
 */
export declare class NodesContributorsReadContributorAttributes extends SpeakeasyBase {
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
    permission?: NodesContributorsReadContributorAttributesPermissionEnum;
    /**
     * The assigned name of the contributor if the contributor has not yet claimed their account.
     */
    unregisteredContributor?: string;
}
/**
 * URLs to alternative representations of the contributor entity.
 */
export declare class NodesContributorsReadContributorLinks extends SpeakeasyBase {
    /**
     * A link to the the canonical API endpoint for the contributor.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
 */
export declare class NodesContributorsReadContributorRelationships extends SpeakeasyBase {
    /**
     * A relationship to the node that was created for the preprint, or from which the preprint was created.
     */
    node: string;
    /**
     * A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
     */
    user: string;
}
export declare class NodesContributorsReadContributor extends SpeakeasyBase {
    /**
     * The properties of the contributor entity.
     */
    attributes?: NodesContributorsReadContributorAttributes;
    /**
     * The identifier of the contributor entity. Contributor identifiers have the form {node_id}-{user_id}.
     */
    id?: string;
    /**
     * URLs to alternative representations of the contributor entity.
     */
    links?: NodesContributorsReadContributorLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the contributor entity.
     */
    relationships: NodesContributorsReadContributorRelationships;
    /**
     * The type identifier of the contributor entity (`contributors`).
     */
    type: string;
}
export declare class NodesContributorsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
