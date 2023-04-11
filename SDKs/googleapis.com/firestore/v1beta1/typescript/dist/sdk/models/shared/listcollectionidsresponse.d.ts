import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response from Firestore.ListCollectionIds.
 */
export declare class ListCollectionIdsResponse extends SpeakeasyBase {
    /**
     * The collection ids.
     */
    collectionIds?: string[];
    /**
     * A page token that may be used to continue the list.
     */
    nextPageToken?: string;
}
