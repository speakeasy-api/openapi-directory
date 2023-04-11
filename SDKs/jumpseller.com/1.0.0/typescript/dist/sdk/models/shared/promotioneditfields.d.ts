import { SpeakeasyBase } from "../../../internal/utils";
import { Id } from "./id";
export declare class PromotionEditFields extends SpeakeasyBase {
    /**
     * Creation date of the promotion (requires 'lasts' param - 'date')
     */
    beginsAt?: string;
    /**
     * Controls the promotion's condition ('none', 'price', 'qty')
     */
    buysAtLeast?: string;
    /**
     * Products Categories where the promotion will be applied (requires 'discount_target' param - 'categories')
     */
    categories?: Id[];
    /**
     * Code of the promotion
     */
    code?: string;
    /**
     * Minimum order amount to validate the promotion (requires 'buys_at_least' param - 'price')
     */
    conditionPrice?: number;
    /**
     * Minimum quantity of ordered itens to validate the promotion (requires 'buys_at_least' param - 'qty')
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
     * Controls to which customers the promotion will be applied ('all', 'loggedin', 'categories', 'guests')
     */
    customers?: string;
    /**
     * Fixed discount amount of the promotion (requires 'type' param - 'fix')
     */
    discountAmountFix?: number;
    /**
     * Percentual discount amount of the promotion (requires 'type' param - 'percentage')
     */
    discountAmountPercent?: number;
    /**
     * Where the promotion will be applied ('order', 'shipping', 'categories', 'buy_x_get_y)
     */
    discountTarget?: string;
    /**
     * If the promotion is to be temporarily disabled
     */
    enabled?: boolean;
    /**
     * Expiration date of the promotion (requires 'lasts' param - 'date')
     */
    expiresAt?: string;
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
     * Controls if the discount will be a fixed area ('fix', 'percentage')
     */
    type?: string;
}
