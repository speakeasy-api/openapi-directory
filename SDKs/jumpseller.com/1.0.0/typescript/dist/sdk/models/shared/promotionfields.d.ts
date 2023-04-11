import { SpeakeasyBase } from "../../../internal/utils";
import { Id } from "./id";
export declare class PromotionFields extends SpeakeasyBase {
    /**
     * Creation date of the promotion (requires 'lasts' param - 'date')
     */
    beginsAt?: string;
    /**
     * Products Categories where the promotion will be applied (requires 'discount_target' param - 'categories')
     */
    categories?: Id[];
    /**
     * Code of the promotion
     */
    code?: string;
    /**
     * Minimum order amount to validate the promotion
     */
    conditionPrice?: number;
    /**
     * Minimum quantity of ordered itens to validate the promotion
     */
    conditionQty?: number;
    /**
     * True if the promotion can be acumulated with others
     */
    cumulative?: boolean;
    /**
     * Customer Categories to whom the promotion will be applied (requires 'customers' param - 'categories')
     */
    customerCategories?: Id[];
    /**
     * Fixed discount amount of the promotion
     */
    discountAmountFix?: number;
    /**
     * Percentual discount amount of the promotion
     */
    discountAmountPercent?: number;
    /**
     * Where the promotion will be applied ('order', 'shipping', 'categories', 'buy_x_get_y)
     */
    discountTarget?: string;
    /**
     * If the promotion is currently enabled
     */
    enabled?: boolean;
    /**
     * Expiration date of the promotion (requires 'lasts' param - 'date')
     */
    expiresAt?: string;
    /**
     * Unique identifier of the product
     */
    id?: number;
    /**
     * Controls when the promotion will expire ('none', 'date', 'max_times_used')
     */
    lasts?: string;
    /**
     * Maximum amount a promotion can be used (requires 'lasts' param - 'max_times_used')
     */
    maxTimesUsed?: number;
    /**
     * Name of the product
     */
    name?: string;
    /**
     * Products where the promotion will be applied (requires 'discount_target' param - 'categories' or 'buy_x_get_y')
     */
    products?: Id[];
    /**
     * Products required to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')
     */
    productsX?: Id[];
    /**
     * Number of sets of products_x needed to be able to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')
     */
    quantityX?: number;
    /**
     * Status of the promotion ('active', 'expired')
     */
    status?: string;
    /**
     * Amount of times the promotion was used
     */
    timesUsed?: number;
}
