import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagResourceRelationshipsTransactionsLinks extends SpeakeasyBase {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     *
     * @remarks
     *
     */
    related: string;
}
export declare class TagResourceRelationshipsTransactions extends SpeakeasyBase {
    links?: TagResourceRelationshipsTransactionsLinks;
}
export declare class TagResourceRelationships extends SpeakeasyBase {
    transactions: TagResourceRelationshipsTransactions;
}
/**
 * Provides information about a tag.
 *
 * @remarks
 *
 */
export declare class TagResource extends SpeakeasyBase {
    /**
     * The label of the tag, which also acts as the tag’s unique identifier.
     *
     * @remarks
     *
     */
    id: string;
    relationships: TagResourceRelationships;
    /**
     * The type of this resource: `tags`
     */
    type: string;
}
