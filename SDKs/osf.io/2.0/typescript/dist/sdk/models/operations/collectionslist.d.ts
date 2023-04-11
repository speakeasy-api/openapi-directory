import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The properties of the collection.
 */
export declare class CollectionsListCollectionAttributes extends SpeakeasyBase {
    /**
     * This attribute indicates if a collection is being used as part of the bookmarking feature that allows each user to create a personal collection.
     */
    bookmarks?: boolean;
    /**
     * A list of the acceptable entity `collected_type` metadata options acceptable for entities in the a collection. This indicates the collected types of entities within a collection.
     */
    collectedTypeChoices?: string[];
    /**
     * The time at which the collection was created, as an iso8601 formatted timestamp.
     */
    dateCreated?: Date;
    /**
     * The time at which the collection was last modified, as an iso8601 formatted timestamp.
     */
    dateModified?: Date;
    /**
     * ???
     */
    isPromoted?: boolean;
    /**
     * This attribute indicates if a collection is viewable to a user with no special permissions.
     */
    isPublic?: boolean;
    /**
     * A list of the acceptable entity `issue` metadata options acceptable for entities in the a collection.  This indicates what issues exist of a multi-issue collection.
     */
    issueChoices?: string[];
    /**
     * A list of the acceptable entity `program_area` metadata options acceptable for entities in the a collection.  This indicates what program areas a collection is composed of .
     */
    programAreaChoices?: string[];
    /**
     * A list of the acceptable entity `status` metadata options acceptable for entities in the a collection. This indicates the status of a entity within a collection.
     */
    statusChoices?: string[];
    /**
     * The title of the collection.
     */
    title?: string;
    /**
     * A list of the acceptable entity `volume` metadata options acceptable for entities in the a collection.  This indicates what volumes exist of a multi-volume collection.
     */
    volumeChoices?: string[];
}
/**
 * URLs to alternative representations of the entity.
 */
export declare class CollectionsListCollectionLinks extends SpeakeasyBase {
    /**
     * A link to the canonical API endpoint of this collection.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the node entity.
 */
export declare class CollectionsListCollectionRelationships extends SpeakeasyBase {
    /**
     * A link to the list of metadata entries that are linked to the current collections.
     */
    collectedMetadata?: string;
    /**
     * A link to the list of nodes that are linked to the current collection.
     */
    linkedNodes?: string;
    /**
     * A link to the list of preprints that are linked to the current collection.
     */
    linkedPreprints?: string;
    /**
     * A link to the list of registrations that are linked to the current collection.
     */
    linkedRegistrations?: string;
    /**
     * A link to the list of nodes that are linked to the current collection.
     */
    nodeLinks?: string;
    /**
     * A link to the list of preprints that this node relates to.
     */
    provider?: string;
}
export declare class CollectionsListCollection extends SpeakeasyBase {
    /**
     * The properties of the collection.
     */
    attributes?: CollectionsListCollectionAttributes;
    /**
     * The unique identifier of the collection.
     */
    id?: string;
    /**
     * URLs to alternative representations of the entity.
     */
    links?: CollectionsListCollectionLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the node entity.
     */
    relationships?: CollectionsListCollectionRelationships;
    /**
     * The type identifier of the entity (`collections`).
     */
    type: string;
}
export declare class CollectionsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
