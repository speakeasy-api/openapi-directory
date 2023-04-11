import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
/**
 * A third party list metagame categories response.
 */
export declare class CategoryListResponse extends SpeakeasyBase {
    /**
     * The list of categories with usage data.
     */
    items?: Category[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#categoryListResponse`.
     */
    kind?: string;
    /**
     * Token corresponding to the next page of results.
     */
    nextPageToken?: string;
}
