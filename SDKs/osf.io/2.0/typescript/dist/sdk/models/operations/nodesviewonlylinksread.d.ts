import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesViewOnlyLinksReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the view only link.
     */
    linkId: string;
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
}
/**
 * The properties of the view only link entity.
 */
export declare class NodesViewOnlyLinksReadViewOnlyLinksAttributes extends SpeakeasyBase {
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
export declare class NodesViewOnlyLinksReadViewOnlyLinksRelationships extends SpeakeasyBase {
    /**
     * A relationship to the user who created this view only link.
     */
    creator: string;
    /**
     * A relationship to the nodes which this view only link gives read-only access to.
     */
    nodes: string;
}
/**
 * OK
 */
export declare class NodesViewOnlyLinksReadViewOnlyLinks extends SpeakeasyBase {
    /**
     * The properties of the view only link entity.
     */
    attributes: NodesViewOnlyLinksReadViewOnlyLinksAttributes;
    /**
     * The unique identifier of the view only link.
     */
    id: string;
    /**
     * URLs to other entities or entity collections that have a relationship to the view only link entity.
     */
    relationships: NodesViewOnlyLinksReadViewOnlyLinksRelationships;
    /**
     * The type identifier of the view only link ('view-only-links').
     */
    type: string;
}
export declare class NodesViewOnlyLinksReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
