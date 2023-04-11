import { SpeakeasyBase } from "../../../internal/utils";
import { TagKey } from "./tagkey";
/**
 * The ListTagKeys response message.
 */
export declare class ListTagKeysResponse extends SpeakeasyBase {
    /**
     * A pagination token returned from a previous call to `ListTagKeys` that indicates from where listing should continue.
     */
    nextPageToken?: string;
    /**
     * List of TagKeys that live under the specified parent in the request.
     */
    tagKeys?: TagKey[];
}
