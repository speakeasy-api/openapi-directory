import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesContributorsListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
}
/**
 * The permission level of the contributor. The default value is 'write'.
 */
export declare enum NodesContributorsListContributorAttributesPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The properties of the contributor entity.
 */
export declare class NodesContributorsListContributorAttributes extends SpeakeasyBase {
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
    permission?: NodesContributorsListContributorAttributesPermissionEnum;
    /**
     * The assigned name of the contributor if the contributor has not yet claimed their account.
     */
    unregisteredContributor?: string;
}
/**
 * URLs to alternative representations of the contributor entity.
 */
export declare class NodesContributorsListContributorLinks extends SpeakeasyBase {
    /**
     * A link to the the canonical API endpoint for the contributor.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
 */
export declare class NodesContributorsListContributorRelationships extends SpeakeasyBase {
    /**
     * A relationship to the node that was created for the preprint, or from which the preprint was created.
     */
    node: string;
    /**
     * A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
     */
    user: string;
}
export declare class NodesContributorsListContributor extends SpeakeasyBase {
    /**
     * The properties of the contributor entity.
     */
    attributes?: NodesContributorsListContributorAttributes;
    /**
     * The identifier of the contributor entity. Contributor identifiers have the form {node_id}-{user_id}.
     */
    id?: string;
    /**
     * URLs to alternative representations of the contributor entity.
     */
    links?: NodesContributorsListContributorLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the contributor entity.
     */
    relationships: NodesContributorsListContributorRelationships;
    /**
     * The type identifier of the contributor entity (`contributors`).
     */
    type: string;
}
export declare class NodesContributorsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
