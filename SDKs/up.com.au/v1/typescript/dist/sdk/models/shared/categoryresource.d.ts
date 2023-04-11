import { SpeakeasyBase } from "../../../internal/utils";
export declare class CategoryResourceAttributes extends SpeakeasyBase {
    /**
     * The name of this category as seen in the Up application.
     *
     * @remarks
     *
     */
    name: string;
}
export declare class CategoryResourceLinks extends SpeakeasyBase {
    /**
     * The canonical link to this resource within the API.
     *
     * @remarks
     *
     */
    self: string;
}
export declare class CategoryResourceRelationshipsChildrenData extends SpeakeasyBase {
    /**
     * The unique identifier of the resource within its type.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The type of this resource: `categories`
     */
    type: string;
}
export declare class CategoryResourceRelationshipsChildrenLinks extends SpeakeasyBase {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     *
     * @remarks
     *
     */
    related: string;
}
export declare class CategoryResourceRelationshipsChildren extends SpeakeasyBase {
    data: CategoryResourceRelationshipsChildrenData[];
    links?: CategoryResourceRelationshipsChildrenLinks;
}
export declare class CategoryResourceRelationshipsParentData extends SpeakeasyBase {
    /**
     * The unique identifier of the resource within its type.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The type of this resource: `categories`
     */
    type: string;
}
export declare class CategoryResourceRelationshipsParentLinks extends SpeakeasyBase {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     *
     * @remarks
     *
     */
    related: string;
}
export declare class CategoryResourceRelationshipsParent extends SpeakeasyBase {
    data: CategoryResourceRelationshipsParentData;
    links?: CategoryResourceRelationshipsParentLinks;
}
export declare class CategoryResourceRelationships extends SpeakeasyBase {
    children: CategoryResourceRelationshipsChildren;
    parent: CategoryResourceRelationshipsParent;
}
/**
 * Provides information about a category and its ancestry.
 *
 * @remarks
 *
 */
export declare class CategoryResource extends SpeakeasyBase {
    attributes: CategoryResourceAttributes;
    /**
     * The unique identifier for this category. This is a human-readable but
     *
     * @remarks
     * URL-safe value.
     *
     */
    id: string;
    links?: CategoryResourceLinks;
    relationships: CategoryResourceRelationships;
    /**
     * The type of this resource: `categories`
     */
    type: string;
}
