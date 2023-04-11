import { SpeakeasyBase } from "../../../internal/utils";
import { Category, CategoryInput } from "./category";
/**
 * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
 */
export declare class CategoriesInput extends SpeakeasyBase {
    /**
     * Optional. Additional categories to describe your business. Categories help your customers find accurate, specific results for services they're interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business.
     */
    additionalCategories?: CategoryInput[];
    /**
     * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
     */
    primaryCategory?: CategoryInput;
}
/**
 * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
 */
export declare class Categories extends SpeakeasyBase {
    /**
     * Optional. Additional categories to describe your business. Categories help your customers find accurate, specific results for services they're interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business.
     */
    additionalCategories?: Category[];
    /**
     * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
     */
    primaryCategory?: Category;
}
