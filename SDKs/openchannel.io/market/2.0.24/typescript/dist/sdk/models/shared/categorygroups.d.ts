import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
/**
 * The category groups supported by this marketplace
 */
export declare class CategoryGroups extends SpeakeasyBase {
    /**
     * The categories supported by this category group
     */
    categories: Category[];
    /**
     * The name of this category group
     */
    name: string;
}
