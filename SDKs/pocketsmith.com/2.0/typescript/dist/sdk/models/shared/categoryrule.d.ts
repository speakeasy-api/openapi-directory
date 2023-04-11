import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
/**
 * Success
 */
export declare class CategoryRule extends SpeakeasyBase {
    category?: Category;
    /**
     * When the category rule was created.
     */
    createdAt?: string;
    /**
     * The unique identifier of the category rule.
     */
    id?: number;
    /**
     * The keyword/s to match the transactions payees.
     */
    payeeMatches?: string;
    /**
     * When the category rule was last updated.
     */
    updatedAt?: string;
}
