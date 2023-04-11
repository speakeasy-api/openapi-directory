import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RegistrationsViewOnlyLinksListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the registration.
     */
    registrationId: string;
}
/**
 * The properties of the view only link entity.
 */
export declare class RegistrationsViewOnlyLinksListViewOnlyLinksAttributes extends SpeakeasyBase {
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
export declare class RegistrationsViewOnlyLinksListViewOnlyLinksRelationships extends SpeakeasyBase {
    /**
     * A relationship to the user who created this view only link.
     */
    creator: string;
    /**
     * A relationship to the nodes which this view only link gives read-only access to.
     */
    nodes: string;
}
export declare class RegistrationsViewOnlyLinksListViewOnlyLinks extends SpeakeasyBase {
    /**
     * The properties of the view only link entity.
     */
    attributes: RegistrationsViewOnlyLinksListViewOnlyLinksAttributes;
    /**
     * The unique identifier of the view only link.
     */
    id: string;
    /**
     * URLs to other entities or entity collections that have a relationship to the view only link entity.
     */
    relationships: RegistrationsViewOnlyLinksListViewOnlyLinksRelationships;
    /**
     * The type identifier of the view only link ('view-only-links').
     */
    type: string;
}
export declare class RegistrationsViewOnlyLinksListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
