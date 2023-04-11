import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesViewOnlyLinksListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
}
/**
 * The properties of the view only link entity.
 */
export declare class NodesViewOnlyLinksListViewOnlyLinksAttributes extends SpeakeasyBase {
    /**
     * Whether or not the view only link has anonymized contributors
     */
    anonymous?: boolean;
    /**
     * The time at which the view only link was created, as an iso8601 formatted timestamp.
     */
    dateCreated?: Date;
    /**
     * The view only key
     */
    key?: string;
    /**
     * The name of the view only link
     */
    name?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the view only link entity.
 */
export declare class NodesViewOnlyLinksListViewOnlyLinksRelationships extends SpeakeasyBase {
    /**
     * A relationship to the user who created this view only link.
     */
    creator: string;
    /**
     * A relationship to the nodes which this view only link gives read-only access to.
     */
    nodes: string;
}
export declare class NodesViewOnlyLinksListViewOnlyLinks extends SpeakeasyBase {
    /**
     * The properties of the view only link entity.
     */
    attributes: NodesViewOnlyLinksListViewOnlyLinksAttributes;
    /**
     * The unique identifier of the view only link.
     */
    id: string;
    /**
     * URLs to other entities or entity collections that have a relationship to the view only link entity.
     */
    relationships: NodesViewOnlyLinksListViewOnlyLinksRelationships;
    /**
     * The type identifier of the view only link ('view-only-links').
     */
    type: string;
}
export declare class NodesViewOnlyLinksListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
